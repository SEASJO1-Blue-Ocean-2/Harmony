import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.css';

function DisplayProfile({ profileData }) {
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
      <div>
        <span>
          Bio:
          {' '}
          {profileData.bio}
        </span>
      </div>
      <Link to="/updateprofile">
        <button type="button">Update Profile</button>
      </Link>

    </div>
  );
}

export default DisplayProfile;
