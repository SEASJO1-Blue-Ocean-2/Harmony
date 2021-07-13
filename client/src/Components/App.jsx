import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import Profile from './profile/Profile';
import MainPage from './Homepage/MainPage';
import Login from './login/LoginView';
import Signup from './login/SignupView';
import 'firebase/auth';
import 'firebase/database';
import config from '../../../config';
import NavigationBar from './Homepage/NavigationBar';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

// <Login user={user} auth={auth} />
// <Room db={db} user={user} />


const App = (props) => {
  const [user] = useAuthState(auth);
  return (

    <Router>
      <div>
        <NavigationBar user={user} db={db} auth={auth} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Login user={user} auth={auth} />}
          />
          <Route
            path="/home"
            render={() => <MainPage user={user} auth={auth} db={db} />}
          />
          <Route
            path="/signUp"
            render={() => <Signup auth={auth} db={db} />}
          />
          <Route
            path="/profile"
            render={() => <Profile auth={auth} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
