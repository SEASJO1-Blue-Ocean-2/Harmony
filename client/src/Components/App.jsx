import React, {useState} from 'react';
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
import RoomsList from './Rooms/RoomsList';
import FriendsList from './FriendsList/FriendsList';
import NotificationsList from './Notifications/NotificationsList';
import Room from './room/Room';

import VideoChannel from './room/videoChannel';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();


const App = (props) => {
  const [user] = useAuthState(auth);
  const [ count , setCount] = useState(0)
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
          <Route path="/Rooms">
            <RoomsList auth={auth} db={db} />
          </Route>
          <Route path="/FriendsList">
            <FriendsList db={db} user={user} />
          </Route>
          <Route path="/Notifications">
            <NotificationsList />
          </Route>
          <Route
            path="/room/:roomId"
            render={match => <Room db={db} auth={auth} roomId={match.match.params.roomId} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
