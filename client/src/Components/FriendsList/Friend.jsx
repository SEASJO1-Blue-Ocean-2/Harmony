import React, { useState, useEffect } from 'react';
import InviteToRoom from './InviteToRoom';
import DirectMessageButton from './DirectMessageButton';
import css from './friendStyles.css';

const Friend = (props) => {
  const { friendId, db, showFriendProfile } = props;
  const [friendName, setFriendName] = useState('');
  const [friendInfo, setFriendInfo] = useState({});
  const friendNameRef = db.ref(`users/${friendId}/username`);
  const friendRef = db.ref(`users/${friendId}`);

  useEffect(() => {
    const f1 = (snapshot) => {
      setFriendName(snapshot.val());
    };
    const f2 = (v) => {
      setFriendInfo(v.val());
    };
    friendNameRef.on('value', f1);
    friendRef.on('value', f2);
    return () => {
      friendNameRef.off('value', f1);
      friendRef.off('value', f2);
    };
  }, [friendId]);

  return (
    <div id={css.friendContainer} className="friend-container">
      <div className="friend-name" onClick={() => showFriendProfile(friendId)} onKeyPress={() => showFriendProfile(friendId)} role="link" tabIndex={0}>{friendName}</div>
      <DirectMessageButton />
      <InviteToRoom />
    </div>
  );
};

export default Friend;
