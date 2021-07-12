import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

import { useList } from 'react-firebase-hooks/database';

const Room = () => {
  const [message, setMessage] = useState('');
  const [roomName, setRoomname] = useState('test room');
  const [dbRef, setDbRef] = useState(firebase.database().ref('/messages/' + roomName));
  const [snapshots, loading, error] = useList(dbRef);


  console.log(dbRef, snapshots, loading, error);


  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (<div>
    <button onClick={() => {
      var data = {
        author: user.displayName,
        uid: user.uid,
        message: 'space test2'
      };
      var key = dbRef.push().key;
      var path = roomName + '/' + key;
      var updates = {};
      updates[path] = data;
      var res = dbRef.update(updates);
    }}>Add Data</button>

    {(
      <div>
        {snapshots.map(v => {
          return <React.Fragment>
            {v.key}
            <ul>
              {Object.keys(v.val()).map(val => <li>{val}: {v.val()[val]}</li>)}
            </ul>
          </React.Fragment>
        })}
      </div>
    )}

    <form onSubmit={sendMessage}>
      <input type='text' value={message} onChange={e => setMessage(e.target.value)} />
      <input type='submit' />
    </form>
  </div>);
};

export default Room