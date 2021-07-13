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
import Signup from './login/SignupView';


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
        <Switch>
          <Route path='/' exact
            render={() => <Login user={user} auth={auth} />} />
          <Route path='/home'
            render={() => <MainPage user={user} auth={auth} db={db} />} />
          <Route path='/signUp'
            render={() => <Signup auth={auth} db={db} />} />
          <Route path='/room/:roomId' render={match => <Room auth={auth} db={db} roomId={match}/>} />
        </Switch>
      </div>
    </Router>);
};


export default App;

