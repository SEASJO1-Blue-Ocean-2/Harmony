import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import Friend from './Friend.jsx'

import { useList } from 'react-firebase-hooks/database';

// firebase.initializeApp(config);
// const auth = firebase.auth();
// const db = firebase.database();

const FriendsList = (props) => {
  const {db} = props;
  const [userId, setUserId] = useState('VgJMO8SsGjS4RomQdFn1NeyQqzq2'/*this will be pulled from state on user auth*/)
  const [friendsList, loading, error] = useList(db.ref(`users/uid/friends`));
  console.log('this is the friends list', friendsList);
  return (
    <div>
      {!loading && friendsList.length > 0 && (
        <div>
          {friendsList.map(friendId => {
            return (
              // <div key={friendId.key}>
                <Friend friendId={friendId} db={db} key={friendId.key}/>
              // </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FriendsList;