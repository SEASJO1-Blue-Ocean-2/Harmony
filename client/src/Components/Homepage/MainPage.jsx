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

<<<<<<< HEAD
const MainPage = (props) => (
  <div>
    <SearchBar db={props.db} user={props.user} auth={props.auth} />
    <RoomsList auth={props.auth} />
  </div>

);
=======
const MainPage = (props) => {
  return (
    <>
    <div>
      <NavigationBar user={props.user} db={props.db} auth={props.auth} />
   </div>
   </>
  );
}
>>>>>>> cf3ce4c6b8bc3833e00d8d4925f2d900e2320472

export default MainPage;
