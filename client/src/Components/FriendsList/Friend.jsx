import React, { useState, useEffect } from 'react';
import InviteToRoom from './InviteToRoom.jsx';
import DirectMessageButton from './DirectMessageButton.jsx';
import css from './friendStyles.css';

const Friend = (props) => {
  const { friendId, db } = props;
  const [friendName, setFriendName] = useState('');
  const [friendInfo, setFriendInfo] = useState({});
  const tempId = 'A2PyioigFaYkKpPFqUcgNN5Gwkp1';
  const friendNameRef = db.ref(`users/${friendId}/username`);
  const friendRef = db.ref(`users/${friendId}`);

  // friendRef.on('value', (v) => {
  //   setFriendInfo(v.val());
  // })

  const handleFriendClick = () => {

  }

  useEffect(() => {
    friendNameRef.on('value', (snapshot) => {
      setFriendName(snapshot.val());
    });
    friendRef.on('value', (v) => {
      setFriendInfo(v.val());
    });
  }, [friendId]);
  console.log('this is the friend info', friendInfo);

  return (
    <div className={css.friendContainer}>
      <Link to="/FriendProfile">
        <div className="friend-name">{friendInfo.username}</div>
      </Link>
      <DirectMessageButton />
      <InviteToRoom />
    </div>
  );
};

export default Friend;
