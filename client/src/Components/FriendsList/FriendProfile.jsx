import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from '../profile/style.css';

const FriendProfile = (props) => {
  const { friendId, db, setShowFriendsList } = props;
  const [profileData, setProfileData] = useState({});
  const friendRef = db.ref(`userData/${friendId}`);

  useEffect(() => {
    friendRef.on('value', (v) => {
      setProfileData(v.val());
    });
  }, [friendId]);

  return (
    <div>
      <img src={profileData.picture} className={css.profilePic} alt="" />
      <div className={css.text}>
        <span>
          Name:
          {' '}
          {profileData.username}
        </span>
        <br />
        <span>
          Country:
          {' '}
          {profileData.country}
        </span>
        <br />
        <span>
          Email:
          {' '}
          {profileData.email}
        </span>
      </div>
      <br />
      <div className={css.bio}>
        <span>
          Bio:
          {' '}
          {profileData.bio}
        </span>
      </div>
      <Link to="/FriendsList">
        <button type="button" className={css.updateButton} onClick={() => setShowFriendsList(true)}>Back</button>
      </Link>
    </div>
  );
};

export default FriendProfile;
