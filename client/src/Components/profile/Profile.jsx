import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, useHistory,
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import PropTypes from 'prop-types';
import UpdateProfile from './UpdateProfile';
import DisplayProfile from './DisplayProfile';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';

function Profile({ auth, db}) {
  /* const [snapshots, loading, error] = useList(db.ref('users')); */
  const [profileData, setProfileData] = useState({});
  const [user] = useAuthState(auth);
  function updateData(data) {
    setProfileData(data);
    db.ref(`userData/${user.uid}`).update(data);
  }

  useEffect(() => {
    // console.log(user);
    const data = JSON.parse(window.localStorage.getItem('/profile'));
    let userId;
    if (user !== null) {
      userId = user.uid;
    } else {
      userId = data.user.uid;
    }
    let userData = {};
    db.ref(`users/${userId}`).on('value', (snapshot) => {
      userData = snapshot.val();
      db.ref(`userData/${userId}`).on('value', (addtionalData) => {
        userData = { ...userData, ...addtionalData.val() };
        setProfileData(userData);
        console.log(userData);
        const dataToSave = {
          user,
          auth,
          db,
          profileData: userData,
        };
        window.localStorage.setItem('/profile', JSON.stringify(dataToSave));
      });
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile" exact render={() => <DisplayProfile profileData={profileData} />} />
          <Route path="/updateprofile" render={() => <UpdateProfile updateData={updateData} profileData={profileData} />} />
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
