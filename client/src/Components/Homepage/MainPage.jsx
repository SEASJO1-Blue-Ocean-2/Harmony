import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Nav from '../Nav';

import RoomsList from './RoomsList';
import Profile from '../profile/Profile';

export default function MainPage() {
  return (
    <>
      <RoomsList />
      {/* <Profile /> */}
    </>
  );
}
