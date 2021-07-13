import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
<<<<<<< HEAD
  Link,
} from 'react-router-dom';
import Nav from '../Nav';

import RoomsList from './RoomsList';
import Profile from '../profile/Profile';
=======
  Link
} from "react-router-dom";

import NavigationBar from './NavigationBar.jsx';
import RoomsList from '../Rooms/RoomsList.jsx';

>>>>>>> 15c77a5ba859bebca69d5cb4ac6536adb323e1cc

const MainPage = (props) => {
  return (
    <div>
      <NavigationBar user={props.user} db={props.db} />
   </div>
    <>
<<<<<<< HEAD
      <RoomsList />
      {/* <Profile /> */}
    </>
=======
      <NavigationBar />
      {/* <RoomsList /> */}
   </>
>>>>>>> 15c77a5ba859bebca69d5cb4ac6536adb323e1cc
  );
}

export default MainPage;
