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
  const { db, user } = props;
  const [userId, setUserId] = useState(user.uid);
  const [friendsList, loading, error] = useList(db.ref(`friends/${userId}`));
  console.log('this is the friends lsit', friendsList);

  useEffect(() => {
    // this will set state for user id with setUserId('whatever is passed from app on auth')
  });
  return (
    <div>
      <h2 className="friends-list-title" className='currentPage'>Friends List</h2>
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
