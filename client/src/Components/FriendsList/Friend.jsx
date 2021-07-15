import React, { useState, useEffect } from 'react';
import InviteToRoom from './InviteToRoom.jsx';
import DirectMessageButton from './DirectMessageButton.jsx';
import css from './friendStyles.css';

const Friend = (props) => {
  const { friendId, db, showFriendProfile } = props;
  const [friendName, setFriendName] = useState('');
  const [friendInfo, setFriendInfo] = useState({});
  const tempId = 'A2PyioigFaYkKpPFqUcgNN5Gwkp1';
  console.log("this is db: ", db);
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
  // console.log('this is the friend info', friendInfo);

  return (
      <div id={css.friendContainer} className='friend-container'>
      <div className="friend-name" onClick={() => showFriendProfile(friendId)}>{friendName}</div>
      <DirectMessageButton />
      <InviteToRoom />
    </div>
  );
};

export default Friend;
