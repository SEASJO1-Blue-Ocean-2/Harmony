
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

import { addData } from '../../util.js';
import { useList, useObject } from 'react-firebase-hooks/database';
import { useAuthState } from 'react-firebase-hooks/auth';

import Message from './Message';
import {TextMenu, VoiceMenu} from './Menus';

import './RoomStyles.css';

const Room = ({ db, auth, roomId }) => {
  const roomRef = db.ref('/messages/' + roomId);
  const [room, loadRooms, errRooms] = useList(roomRef);

  const [channelId, setChannel] = useState(null);

  const [messagesRef, setMessagesRef] = useState();
  //const [messages, loadMessages, errMessages] = useList(messagesRef);
  const messages = [];
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');

  const userRef = db.ref('/users/' + user.uid);
  const [userObj, loadUser, errUser] = useObject(userRef);

  const [menu, setMenu] = useState(0);

  useEffect(() => {
    //console.log('room update', room, loadRooms, errRooms);
    if(!loadRooms) {
      setChannel(room)
    }
    //setMessagesRef(db.ref('/messages/' + roomId));

  }, [room]);

  const sendMessage = (e) => {
    e.preventDefault();
    var data = {
      author: userObj.val().username,
      uid: user.uid,
      message: message,
      created: Date.now()
    };
    var res = addData(data, messagesRef);
  };

  return (<div>
      {menu === 1 && <TextMenu />}
      {menu === 2 && <VoiceMenu />}
      {menu === 0 && <div><button>Show Text Channels</button> <button>Show Voice Channels</button> </div>}
      <div>
        {room.map(message => {
          return <Message key={message.key} data={message.val()} uid={user.uid} />
        })}
      </div>

    <form onSubmit={sendMessage}>
      <input type='text' value={message} onChange={e => setMessage(e.target.value)} />
      <input type='submit' />
    </form>
  </div >);
};


export default Room
