import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

import { addData } from '../util.js';
import { useList } from 'react-firebase-hooks/database';

const Room = ({ db, auth, roomName }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');
  const [dbRef, setDbRef] = useState(db.ref('/messages/' + roomName));
  const [snapshots, loading, error] = useList(dbRef);
  console.log(roomName);

  const sendMessage = (e) => {
    e.preventDefault();
    var data = {
      author: user.displayName,
      uid: user.uid,
      message: message
    };
    var res = addData(data, dbRef);
    //res.then(d => console.log(d));
  };

  return (<div>
    {(
      <div>
        {snapshots.map(v => {
          return <React.Fragment>
            {v.key}
            <ul>
              {<Message data={v.val()}>}
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


<<<<<<< HEAD
export default Room;
=======
export default Room
>>>>>>> a2722f222e8100429137ccb4602c845e3d7b81ef
