import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';
import 'firebase/storage';

import { addData } from '../../util.js';
import { useList, useObject } from 'react-firebase-hooks/database';
import { useAuthState } from 'react-firebase-hooks/auth';

import Message from './Message';
import SendMediaButton from './SendMediaButton.jsx';
import { TextMenu, VoiceMenu } from './Menus';
import VideoChannel from './videoChannel'

import './RoomStyles.css';
import Peer from 'peerjs';

const Room = ({ db, auth, roomId }) => {
  const roomRef = db.ref('/rooms/' + roomId);
  const [room, loadRooms, errRooms] = useList(roomRef);

  const [textChannelId, setTextChannel] = useState(null);
  const [voiceChannelId, setVoiceChannel] = useState(null);

  const [textChannels, setTextChannels] = useState(null);
  const [voiceChannels, setVoiceChannels] = useState(null);

  const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');

  const userRef = db.ref('/users/' + user.uid);
  const [userObj, loadUser, errUser] = useObject(userRef);

  const [menu, setMenu] = useState(0);
  const [count, setCount] = useState(0);

  const [currentUrl, setCurrentUrl] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);
  const [showMediaInput, setShowMediaInput] = useState(false);


  const myPeer = new Peer(undefined, {
    host: '/', port: '3001'
  });
  let peerId;

  myPeer.on('open', (id) => {
    peerId = id;
  });

  useEffect(() => {
    if (!loadRooms) {
      for (var i = 0; i < room.length; i++) {
        if (room[i].key === 'default_channel') {
          setTextChannel(room[i].val());
        }
        if (room[i].key === 'channels') {
          setTextChannels(room[i].val());
        }
        if (room[i].key === 'voice_channels') {
          setVoiceChannels(room[i].val());
        }
      }
    }
  }, [room]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (textChannelId) {
      var data = {
        author: userObj.val().username,
        uid: user.uid,
        message: message,
        created: Date.now(),
        photo: currentUrl
      };
      var res = addData(data, db.ref('/messages/' + textChannelId));
      setMessage('');
      setFileUploaded(false);
      setShowMediaInput(false);
    }
  };

  function menuToggle(type) {
    // type is 'text' or 'voice'
    // 0 is closed
    // 1 is open text channels
    // 2 is open voice channels
    // menu
    if (type === 'text' && menu !== 1) {
      // open text menu
      setMenu(1);
    } else if (type === 'voice' && menu !== 2) {
      // open voice channels
      setMenu(2);
    } else {
      // close channel list
      setMenu(0);
    }
  }

  return (
    <div>
      {
        <div className="showChannels">
          <button onClick={() => menuToggle('text')} className="textChannels">
            {
              menu === 1 ?
                'Hide Text Channels'
              :
                'Show Text Channels'
            }
          </button>{' '}
          <button onClick={() => menuToggle('voice')} className="voiceChannels">
            {
              menu === 2 ?
                'Hide Voice Channels'
              :
                'Show Voice Channels'
            }
          </button>
        </div>
      }
      {menu === 2 && voiceChannels && <VideoChannel roomId={roomId, peerId}/>}
      {menu === 1 && textChannels && (
        <TextMenu
          channels={textChannels}
          channelId={textChannelId}
          setChannel={setTextChannel}
          db={db}
          roomId={roomId}
        />
      )}

      <div>
        {textChannelId && (
          <MessageView channelId={textChannelId} db={db} uid={user.uid} />
        )}
      </div>
      <SendMediaButton
        setCurrentUrl={setCurrentUrl}
        sendMessage={sendMessage}
        setFileUploaded={setFileUploaded}
        fileUploaded={fileUploaded}
        showMediaInput={showMediaInput}
        setShowMediaInput={setShowMediaInput}
      />
    <form onSubmit={sendMessage} className='submitMessageInRoom'>
      <input type='text' value={message} onChange={e => setMessage(e.target.value)} className='setMessageSubmit' />
      <input type='submit' className='submitMessageButton' />
    </form>
  </div >);
};

const MessageView = ({ channelId, db, uid }) => {
  const [messages, load, err] = useList(db.ref('/messages/' + channelId));
  return (
    <div className='messageContainer'>
      {!load &&
        messages.map((message) => {
          return <Message key={message.key} data={message.val()} uid={uid} />;
        })}
    </div>
  );
};

export default Room;
