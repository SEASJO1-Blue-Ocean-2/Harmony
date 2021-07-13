import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavigationBar from './NavigationBar.jsx';


const MainPage = (props) => {
  return (
    <>
      <NavigationBar user={props.user} db={props.db} />
   </>
  );
}

export default MainPage;
