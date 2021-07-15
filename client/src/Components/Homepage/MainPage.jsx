import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import firebase from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import RoomsList from '../Rooms/RoomsList.jsx';

const MainPage = ({ db, user, auth }) => {
  const friendsRef = () => {
    if (user) {
      return db.ref(`friends/${user.uid}`);
    }
  };
  const [friendsList, loading, error] = useList(friendsRef());
  return (
    <div>
      <SearchBar db={db} user={user} auth={auth} friendsList={friendsList} />
      <div id='test'>
        <RoomsList auth={auth} db={db} />
      </div>

    </div>
  )
}

export default MainPage;
