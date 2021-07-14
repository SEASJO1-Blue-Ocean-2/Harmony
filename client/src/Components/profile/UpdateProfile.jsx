import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './style.css';

function UpdateProfile({ updateData, profilePic }) {
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
      picture: profilePic,
    });
  }

  return (
    <div>
      <span>Update Profile</span>
      <br />
      <span>Name: </span>
      <br />
      <input type="text" id="name" onChange={onChangeName} />
      <br />
      <span>Country: </span>
      <br />
      <input type="text" id="name" onChange={onChangeCountry} />
      <br />
      <span>Email: </span>
      <br />
      <input type="text" id="name" onChange={onChangeEmail} />
      <br />
      <span>Bio: </span>
      <br />
      <textarea className={css.bioUpdateText} row="400" cols="20" id="bio" onChange={onChangeBio} />
      <br />
      <Link to="/profile">
        <button type="button" onClick={onClick}>Save Profile</button>
      </Link>
    </div>
  );
}

UpdateProfile.propTypes = {
  updateData: PropTypes.func.isRequired,
  profilePic: PropTypes.string.isRequired,
};

export default UpdateProfile;
