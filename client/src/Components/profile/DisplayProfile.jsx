import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      <div className={css.bio}>
        <span>
          Bio:
          {' '}
          {profileData.bio}
        </span>
      </div>
      <Link to="/updateprofile">
        <button type="button" className={css.updateButton}>Update Profile</button>
      </Link>
    </div>
  );
}

DisplayProfile.propTypes = {
  profileData: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default DisplayProfile;
