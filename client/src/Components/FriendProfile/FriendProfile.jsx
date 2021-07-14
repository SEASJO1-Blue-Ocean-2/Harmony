import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from '../profile/style.css';

const FriendProfile = (props) => {
  const { profileData } = props;
  return (
    <div>
    <img src={profileData.picture} className={css.profilePic} alt="" />
    <div className={css.text}>
      <span>
        Name:
        {' '}
        {profileData.name}
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
      <button type="button" className={css.updateButton}>Back</button>
    </Link>
  </div>
  );
};