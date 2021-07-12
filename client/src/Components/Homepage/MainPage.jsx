import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavigationBar from './NavigationBar.jsx';
import RoomsList from './RoomsList.jsx';

export default function Main() {
  return (
    <>
      <NavigationBar />
      {/* <RoomsList /> */}
   </>
  );
}

