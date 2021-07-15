import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './style.css';

function UpdateProfile({ updateData, profileData }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangeCountry(event) {
    setCountry(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangeBio(event) {
    setBio(event.target.value);
  }

  function onClick() {
    updateData({
      name,
      country,
      email,
      bio,
      picture: profileData.picture,
    });
  }

  return (
    <div>
      <span>Update Profile</span>
      <br />
      <span>Name: </span>
      <br />
      <input type="text" id="name" onChange={onChangeName} value={profileData.username} />
      <br />
      <span>Country: </span>
      <br />
      <input type="text" id="name" onChange={onChangeCountry} value={profileData.country} />
      <br />
      <span>Email: </span>
      <br />
      <input type="text" id="name" onChange={onChangeEmail} value={profileData.email} />
      <br />
      <span>Bio: </span>
      <br />
      <textarea className={css.bioUpdateText} row="400" cols="20" id="bio" onChange={onChangeBio} value={profileData.bio} />
      <br />
      <Link to="/profile">
        <button type="button" onClick={onClick}>Save Profile</button>
      </Link>
    </div>
  );
}

UpdateProfile.propTypes = {
  updateData: PropTypes.func.isRequired,
  profileData: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default UpdateProfile;
