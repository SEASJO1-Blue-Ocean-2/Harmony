import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import css from './style.css';
import UpdateProfile from './UpdateProfile';
import DisplayProfile from './DisplayProfile';

function Profile() {
  const [profileData, setProfileData] = useState({
    bio: 'test', country: 'usa', email: 'jake@fake.com', name: 'jacob', picture: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg',
  });

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
