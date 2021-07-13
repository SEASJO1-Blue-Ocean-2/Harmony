import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavigationBar from './NavigationBar.jsx';
<<<<<<< HEAD
=======
import RoomsList from '../Rooms/RoomsList.jsx';
>>>>>>> 60ee25c (merging before pull)


const MainPage = (props) => {
  return (
<<<<<<< HEAD
    <div>
      <NavigationBar user={props.user} db={props.db} />
   </div>
=======
    <>
      <NavigationBar />
      {/* <RoomsList /> */}
   </>
>>>>>>> 60ee25c (merging before pull)
  );
}

export default MainPage;
