import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Nav from '../Nav';
import Profile from '../profile/Profile';

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
