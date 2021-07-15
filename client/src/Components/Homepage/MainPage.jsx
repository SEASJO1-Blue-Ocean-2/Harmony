import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import firebase from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';

const MainPage = ({ db, user, auth }) => {

  const [friendsList, loading, error] = useList(db.ref(`friends/${user.uid}`));

  return (
    <div>
      <SearchBar db={db} user={user} auth={auth} friendsList={friendsList}/>
    </div>
  )
}

export default MainPage;
