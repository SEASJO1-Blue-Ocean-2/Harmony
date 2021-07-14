import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import PropTypes from "prop-types";
import UpdateProfile from './UpdateProfile';
import DisplayProfile from './DisplayProfile';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import config from '../../../../config';

/* firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database(); */

function Profile({ auth }) {
  /* const [snapshots, loading, error] = useList(db.ref('users')); */
  const [user] = useAuthState(auth);

  const [profileData, setProfileData] = useState({
    bio: 'NA', country: 'NA', email: 'NA', name: 'NA', picture: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg',
  });

  function updateData(data) {
    setProfileData(data);
  }

  useEffect(() => {
    /* if (!loading) {
      setProfileData(JSON.parse(JSON.stringify(snapshots[0])));
    } */

    setProfileData({
      bio: 'NA',
      country: 'NA',
      email: user.email,
      name: user.displayName,
      picture: user.photoURL,
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile" exact render={() => <DisplayProfile profileData={profileData} />} />
          <Route path="/updateprofile" render={() => <UpdateProfile updateData={updateData} />} />
        </Switch>
      </div>
    </Router>
  );
}

/* Profile.propTypes = {
  profileData: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
}; */
export default Profile;

//  bio: 'test', country: 'usa', email: 'jake@fake.com', name: 'Alex', picture: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg',
