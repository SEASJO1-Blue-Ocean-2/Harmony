import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import Room from './Room.jsx';
import MainPage from './Homepage/MainPage.jsx';
import Login from './login/LoginView.jsx';
import Signup from './login/SignupView.jsx';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import config from '../../../config.js';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

const App = (props) => {
  const [user] = useAuthState(auth);
  return (
  <Router>
    <div>
      <Switch>
        <Route path='/' exact
        render={()=> <Login user={user} auth={auth}/>} />
        <Route path='/home'
        render={()=> <MainPage user={user} />} />
        <Route path='/signUp'
        render={()=> <Signup auth={auth} db={db} />} />
      </Switch>
    </div>
  </Router>);
};

export default App;