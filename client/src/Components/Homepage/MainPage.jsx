import React from 'react';
import { useList } from 'react-firebase-hooks/database';
import SearchBar from './SearchBar';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';

const MainPage = ({ db, user, auth }) => {
  function friendsRef() {
    if (user) {
      return db.ref(`friends/${user.uid}`);
    }
    return null;
  }
  const [friendsList] = useList(friendsRef());

  return (
    <div>
      <SearchBar db={db} user={user} auth={auth} friendsList={friendsList} />
    </div>
  );
};

export default MainPage;
