<<<<<<< HEAD
import React, { setState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';
import config from '../../../config';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

const Room = () => {
  const [snapshots, loading, error] = useList(db.ref('users'));
  return (
    <div>
      {!loading && snapshots.length > 0 && (
      <div>
        {snapshots.map((v) => <div key={v.key}>{JSON.stringify(v.val())}</div>)}
      </div>
      )}
    </div>
  );
};

export default Room;
=======
// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/analytics';
// import 'firebase/database';

// import { addData } from '../util.js';
// import { useList } from 'react-firebase-hooks/database';

// const Room = ({ db, user }) => {
//   const [message, setMessage] = useState('');
//   const [roomName, setRoomname] = useState('test room');
//   const [dbRef, setDbRef] = useState(firebase.database().ref('/messages/' + roomName));
//   const [snapshots, loading, error] = useList(dbRef);


//   const sendMessage = (e) => {
//     e.preventDefault();
//     var data = {
//       author: user.displayName,
//       uid: user.uid,
//       message: message
//     };
//     var res = addData(data, dbRef);
//     //res.then(d => console.log(d));
//   };

//   return (<div>
//     <button onClick={() => {

//     }}>Add Data</button>

//     {(
//       <div>
//         {snapshots.map(v => {
//           return <React.Fragment>
//             {v.key}
//             <ul>
//               {Object.keys(v.val()).map(key => <li>{key}: {v.val()[key]}</li>)}
//             </ul>
//           </React.Fragment>
//         })}
//       </div>
//     )}

//     <form onSubmit={sendMessage}>
//       <input type='text' value={message} onChange={e => setMessage(e.target.value)} />
//       <input type='submit' />
//     </form>
//   </div>);
// };


// export default Room
