
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

import { addData } from '../../util.js';
import { useList } from 'react-firebase-hooks/database';
import { useAuthState } from 'react-firebase-hooks/auth';

import Message from './Message'

const Room = ({ db, auth, roomId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');
  const [dbRef, setDbRef] = useState(db.ref('/messages/' + roomId));
  const [snapshots, loading, error] = useList(dbRef);

  const sendMessage = (e) => {
    e.preventDefault();
    var data = {
      author: user.displayName,
      uid: user.uid,
      message: message,
      created: Date.now()
    };
    var res = addData(data, dbRef);
  };

  return (<div>
      <div>
        {snapshots.map(message => {
          return <Message key={message.key} data={message.val()} />
        })}
      </div>

    <form onSubmit={sendMessage}>
      <input type='text' value={message} onChange={e => setMessage(e.target.value)} />
      <input type='submit' />
    </form>
  </div >);
};


export default Room
