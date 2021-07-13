import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import Friend from './Friend.jsx';
import IncomingButton from './IncomingButton.jsx';
import OutgoingButton from './OutgoingButton.jsx';

import { useList } from 'react-firebase-hooks/database';

// firebase.initializeApp(config);
// const auth = firebase.auth();
// const db = firebase.database();

const FriendsList = (props) => {
  const {db} = props;
  const [userId, setUserId] = useState('VgJMO8SsGjS4RomQdFn1NeyQqzq2'/*this will be pulled from state on user auth*/);
  const [friendsList, loading, error] = useList(db.ref(`users/uid/friends`));
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
