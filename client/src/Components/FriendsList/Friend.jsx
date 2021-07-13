import React, { useState, useEffect } from 'react';
import InviteToRoom from './InviteToRoom.jsx';
import DirectMessageButton from './DirectMessageButton.jsx';

const Friend = (props) => {
  const { friendId, db } = props;
  const [friendName, setFriendName] = useState('');
  const tempId = 'A2PyioigFaYkKpPFqUcgNN5Gwkp1';

  console.log('this is the friend ID', friendId);

  const friendNameRef = db.ref(`users/${friendId}/username`);

  useEffect(() => {
    friendNameRef.on('value', (snapshot) => {
      setFriendName(JSON.stringify(snapshot.val()));
    });
  });

  return (
    <div className="friend-container">
      <div>{friendName}</div>
      <DirectMessageButton />
      <InviteToRoom />
    </div>
  );
};

export default Friend;
