import React, { useState, useEffect } from 'react';
import InviteToRoom from './InviteToRoom.jsx';
import DirectMessageButton from './DirectMessageButton.jsx';

const Friend = (props) => {
  const { friendId, db } = props;
  const [friendName, setFriendName] = useState('');
  const tempId = 'A2PyioigFaYkKpPFqUcgNN5Gwkp1';
  const friendNameRef = db.ref(`users/${friendId}/username`);

  useEffect(() => {
    friendNameRef.on('value', (snapshot) => {
      setFriendName(JSON.stringify(snapshot.val()));
    });
  });

  return (
    <div className="friend-container">
      <div className="friend-name">{friendName}</div>
      <DirectMessageButton />
      <InviteToRoom />
    </div>
  );
};

export default Friend;
