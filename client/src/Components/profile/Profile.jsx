import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';

import UpdateProfile from './UpdateProfile';
import DisplayProfile from './DisplayProfile';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import config from '../../../../config';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

function Profile() {
  const [snapshots, loading, error] = useList(db.ref('users'));

  const [profileData, setProfileData] = useState({
    bio: 'NA', country: 'NA', email: 'NA', name: 'NA', picture: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg',
  });

  function updateData() {

  }

  useEffect(() => {
    /* if (!loading) {
      setProfileData(JSON.parse(JSON.stringify(snapshots[0])));
    } */
  }, [snapshots]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact render={() => <DisplayProfile profileData={profileData} />} />
          <Route path="/updateprofile" render={() => <UpdateProfile setProfileData={setProfileData} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default Profile;

//  bio: 'test', country: 'usa', email: 'jake@fake.com', name: 'Alex', picture: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg',
