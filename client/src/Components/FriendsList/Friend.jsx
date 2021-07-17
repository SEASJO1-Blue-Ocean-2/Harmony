import React, { useState, useEffect } from 'react';
import InviteToRoom from './InviteToRoom.jsx';
import DirectMessageButton from './DirectMessageButton.jsx';
import css from './friendStyles.css';

const Friend = (props) => {
  const { friendId, db, showFriendProfile } = props;
  const [friendName, setFriendName] = useState('');
  const [friendInfo, setFriendInfo] = useState({});
  const tempId = 'A2PyioigFaYkKpPFqUcgNN5Gwkp1';
  const friendNameRef = db.ref(`users/${friendId}/username`);
  const friendRef = db.ref(`users/${friendId}`);

  const handleFriendClick = () => {

  }

  useEffect(() => {
    var f1 = (snapshot) => {
      setFriendName(snapshot.val());
    };
    var f2 = (v) => {
      setFriendInfo(v.val());
    }
    friendNameRef.on('value', f1);
    friendRef.on('value', f2);
    return () => {
      friendNameRef.off('value', f1);
      friendRef.off('value', f2);
    };
  }, [friendId]);

  return (
      <div id={css.friendContainer} className='friend-container'>
      <div className="friend-name" onClick={() => showFriendProfile(friendId)}>{friendName}</div>
      <DirectMessageButton />
      <InviteToRoom />
    </div>
  );
};

export default Friend;
