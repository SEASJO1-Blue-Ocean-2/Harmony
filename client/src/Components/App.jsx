import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import Profile from './profile/Profile';

import MainPage from './Homepage/MainPage';
import Login from './login/LoginView';

import 'firebase/auth';
import 'firebase/database';

import config from '../../../config';
import Nav from './Nav';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

// <Login user={user} auth={auth} />
// <Room db={db} user={user}/>

const App = (props) => {
  const [user] = useAuthState(auth);
  return (

    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact render={() => <Login user={user} auth={auth} />} />
          <Route
            path="/home"
            render={() => <MainPage user={user} />}
          />
          <Route path="/profile" render={() => <Profile auth={auth} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
