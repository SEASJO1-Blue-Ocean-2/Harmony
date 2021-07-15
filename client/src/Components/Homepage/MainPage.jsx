import React from 'react';
import SearchBar from './SearchBar';
import firebase from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';

const MainPage = ({ db, user, auth, friendsList}) => {
  return (
    <div>
      <SearchBar db={db} user={user} auth={auth} friendList={friendsList}/>
    </div>
  )
}

export default MainPage;