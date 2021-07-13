import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import NavigationBar from './NavigationBar.jsx';
import RoomsList from '../Rooms/RoomsList.jsx';
import SearchBar from './SearchBar';

const MainPage = ({ user, auth, db }) => {
  return (
    <>
      <NavigationBar user={user} db={db} auth={auth} />
      <RoomsList user={user} db={db} auth={auth} />
      {/* <RoomsList user={user} db={db} auth={auth} /> */}
      {/* <Profile /> */}
   </>
  );
}

export default MainPage;
