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
import SearchBar from './SearchBar';

const MainPage = (props) => {
  return (
    <>
    <div>
      <NavigationBar user={props.user} db={props.db} auth={props.auth} />
   </div>
   </>
  );
}

export default MainPage;
