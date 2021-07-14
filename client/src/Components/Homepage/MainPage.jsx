import React from 'react';
import SearchBar from './SearchBar';

const MainPage = ({ db, user, auth}) => {
  return (
    <div>
      <SearchBar db={db} user={user} auth={auth} />
    </div>
  )
}

export default MainPage;