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
import 'firebase/storage';
import config from '../../../config';
import NavigationBar from './Homepage/NavigationBar';
import RoomsList from './Rooms/RoomsList';
import FriendsList from './FriendsList/FriendsList';
import NotificationsList from './Notifications/NotificationsList';
import CreateUserData from './login/CreateUserData';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();
// const storage = firebase.storage();
// const storageRef = storage.ref();
// const elCapRef = storageRef.child('el_cap.jpeg');

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <Router>
      <div>
        {user && <NavigationBar user={user} db={db} auth={auth} />}
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Login user={user} auth={auth} />}
          />
          <Route
            path="/signUp"
            render={() => <Signup auth={auth} db={db} />}
          />
          <Route
            path="/createUserData"
            render={(info) => <CreateUserData auth={auth} db={db} info={info.location.state} />}
          />
          <Route
            path="/home"
            render={() => <MainPage user={user} auth={auth} db={db} />}
          />
          <Route
            path="/profile"
            render={() => <Profile auth={auth} db={db} user={user} />}
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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
