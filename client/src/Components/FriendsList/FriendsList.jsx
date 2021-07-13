import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import Friend from './Friend.jsx';
import IncomingButton from './IncomingButton.jsx';
import OutgoingButton from './OutgoingButton.jsx';


const FriendsList = (props) => {
  const { db } = props;
  const [userId, setUserId] = useState('VgJMO8SsGjS4RomQdFn1NeyQqzq2'/* this will be pulled from state on user auth */);
  // userid will go in place of uid in db.ref
  const [friendsList, loading, error] = useList(db.ref(`users/uid/friends`));
  // console.log('this is the friends list', friendsList);

  useEffect(() => {
    // this will set state for user id with setUserId('whatever is passed from app on auth')
  })
  return (
    <div>
      <h1 className="friends-list-title">Friends List</h1>
      <div className="friends-list-conatiner">
        {!loading && friendsList.length > 0 && (
          <div>
            {friendsList.map(friendId => (
              <Friend friendId={friendId.val()} db={db} key={friendId.key}/>
            ))}
          </div>
        )}
      </div>
      <div className="incoming-outgoing-container">
        <IncomingButton />
        <OutgoingButton />
      </div>
    </div>
  );
};

export default FriendsList;
