import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavigationBar from './NavigationBar.jsx';
import RoomsList from '../Rooms/RoomsList.jsx';


const MainPage = (props) => {
  return (
    <>
    <div>
      <NavigationBar user={props.user} db={props.db} />
   </div>

      {/* <RoomsList /> */}
   </>
  );
}

export default MainPage;
