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

  return (<div className='channels'>
    {<div><button onClick={() => setMenu(1)} className='textChannels'>Show Text Channels</button> <button onClick={() => setMenu(2)} className='videoChannels'>Show Video Channels</button> </div>}
    {menu === 2 && voiceChannels && <VideoChannel db={db} roomId={roomId}/>}
    {menu === 1 && textChannels &&
    <div>
      <TextMenu channels={textChannels} channelId={textChannelId} setChannel={setTextChannel}/>
      <div>
        {textChannelId && <MessageView channelId={textChannelId} db={db} uid={user.uid} />}
      </div>

      <SendMediaButton
        setCurrentUrl={setCurrentUrl}
        sendMessage={sendMessage}
        setFileUploaded={setFileUploaded}
        fileUploaded={fileUploaded}
        showMediaInput={showMediaInput}
        setShowMediaInput={setShowMediaInput}
      />
      <form onSubmit={sendMessage}  className='submitMessage'>
        <input type='text' value={message} onChange={e => setMessage(e.target.value)} />
        <input type='submit' />
      </form>
    </div >}
  </div>);
};

const MessageView = ({ channelId, db, uid }) => {
  const [messages, load, err] = useList(db.ref('/messages/' + channelId));
  return (
    <div className='messageContainer'>
      {!load && messages.map(message => {
        return <Message key={message.key} data={message.val()} uid={uid} />
      })}
    </div>
  )

};

export default Room;
