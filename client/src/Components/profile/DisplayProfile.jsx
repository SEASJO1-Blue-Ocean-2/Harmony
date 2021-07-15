import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './style.css';

function DisplayProfile({ profileData }) {
  console.log("this is profileData: ", profileData);
  return (
    <div>
      <img src={profileData.picture} className={css.profilePic} alt="" />
      <br />
      <div className={css.textBlock}>
        <span className={css.inputText}>
          Name:
        </span>
        <br />
        <p className={css.text}>{profileData.username}</p>
        <br />
        <span className={css.inputText}>
          Country:
        </span>
        <br />
        <p className={css.text}>{profileData.country}</p>
        <br />
        <span className={css.inputText}>
          Email:
        </span>
        <br />
        <p className={css.text}>{profileData.email}</p>
        <br />
        <span className={css.inputText}>
          Bio:
        </span>
        <br />
        <p className={css.text}>{profileData.bio}</p>
      </div>
      <br />
      <Link to="/updateprofile">
        <button type="button" className={css.updateButton}>Update Profile</button>
      </Link>
    </div>
  );
}

DisplayProfile.propTypes = {
  profileData: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default DisplayProfile;
