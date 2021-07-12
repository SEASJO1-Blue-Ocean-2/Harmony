import React from 'react';
import Room from './Room.jsx';
import Login from './login/LoginView.jsx';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import config from '../../../config.js';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

//    <Room />

const App = (props) => {
  const [user] = useAuthState(auth);
  return (<div>
    Hello World
    <Login user={user} />
  </div>)
};

export default App;