import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const CreateUserData = ({ auth, db, info }) => {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(info.username);
  const [email, setEmail] = useState(info.email);
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  const [picture, setPicture] = useState('');

  function AddUserData() {
    const userData = {
      name: username,
      country,
      email,
      bio,
      // TODO: picture: pictureUrl
    };
    db.ref(`userData/${user.uid}`).update(userData);
  }

  function onCountryChange(event) {
    setCountry(event.target.value);
  }

  function onBioChange(event) {
    setBio(event.target.value);
  }

  return (
    <div className="create-profile">
      <h1>
        Welcome
        {' '}
        {info.username}
        !
      </h1>
      <span>Create your Profile</span>

      <div className="country">
        <label htmlFor="countryInput">
          Which country are you in?
          <input type="text" id="countryInput" onChange={onCountryChange} />
        </label>
      </div>

      <div className="bio">
        <label htmlFor="bio">
          Tell us a little bit about yourself!
          <textarea className="bio" row="400" col="20" id="bio" onChange={onBioChange} />
        </label>
      </div>

      {/* TODO: Set up a place to upload an image to the storage
      <div className='profile-pic'>
        <label></label>
        <input></input>
      </div>
      */}

      <Link to="/home">
        <button type="button" onClick={AddUserData}>Finish Creating Profile</button>
      </Link>

    </div>
  );
};

export default CreateUserData;
