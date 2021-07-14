
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Nav from '../Nav';
import Profile from '../profile/Profile';
<<<<<<< HEAD
import NavigationBar from './NavigationBar.jsx';
import RoomsList from '../Rooms/RoomsList.jsx';
import SearchBar from './SearchBar';
import firebase from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
      <SearchBar db={this.props.db} user={this.props.user} auth={this.props.auth} />
    </div>
    );
  }
};
export default MainPage;
=======

import NavigationBar from './NavigationBar.jsx';
import RoomsList from '../Rooms/RoomsList.jsx';

const MainPage = ({ user, auth, db }) => {
  return (
    <>
      <NavigationBar user={user} db={db} auth={auth} />
      {/* <RoomsList user={user} db={db} auth={auth} /> */}
      {/* <Profile /> */}
   </>
  );
}

export default MainPage;
>>>>>>> a2722f222e8100429137ccb4602c845e3d7b81ef
