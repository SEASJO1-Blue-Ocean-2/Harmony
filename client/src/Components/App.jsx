import React from 'react';
import Room from './Room.jsx';
import Login from './login/LoginView.jsx';
import Signup from './login/SignupView.jsx';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import config from '../../../config.js';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

const App = (props) => {
  const [user] = useAuthState(auth);
  return (<div>
    {user
    ? <Room db={db} auth={auth} />
    : <div> <Signup auth={auth} db={db} /> <Login auth={auth}/> </div>
    }


  </div>)
};

export default App;