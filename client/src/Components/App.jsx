import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import Room from './Room.jsx';
import MainPage from './Homepage/MainPage.jsx';
import Login from './login/LoginView.jsx';
import Signup from './login/SignupView.jsx';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import config from '../../../config.js';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

//<Login user={user} auth={auth} />
//<Room db={db} user={user}/>


const App = (props) => {
  const [user] = useAuthState(auth);
  return (<div>
    Hello World
    <Login user={user} auth={auth} />

    {/* <Signup auth={auth} db={db} /> */}

    {/* <Room /> */}
    <Router>
      <div>
        <Switch>
          <Route path='/' exact
          render={()=> <MainPage user={user} />} />
        </Switch>
      </div>
    </Router>
  </div>)
};

export default App;