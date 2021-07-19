import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import FriendsList from '../FriendsList/FriendsList';
import NotificationsList from '../Notifications/NotificationsList';
import RoomsRoutes from '../Rooms/RoomsRoutes';

const SearchBar = ({
  friendsList, user, db, auth,
}) => {
  function handleSubmitButton() {
    const currentDropDown = document.getElementsByClassName('currentPage')[0].innerText;
    const searchBarText = document.getElementById('searchBarText').value;
    if (currentDropDown === 'Friends List') {
      const currentFriends = document.getElementsByClassName('friend-container');
      for (let i = 0; i < currentFriends.length; i += 1) {
        if (!(currentFriends[i]).outerHTML.toLowerCase().includes(searchBarText.toLowerCase())) {
          currentFriends[i].remove();
          i -= 1;
        }
      }
    }
  }

  function resetSearchText() {
    const currentSearchText = document.getElementById('searchBarText');
    currentSearchText.value = '';
    const test = document.getElementById('test');
    if (test) {
      test.remove();
    }
  }

  return (
    <div>
      <div className="search">
        <input type="text" className="SearchBar" placeholder="Search" id="searchBarText" />
        <button type="button" className="searchButton" onClick={handleSubmitButton}>Go!</button>
      </div>
      <Router>
        <Redirect to="/rooms" />
        <div>
          <nav className="mainPageOptions">
            <Link to="/Notifications" onClick={resetSearchText}>Notifications</Link>
            <Link to="/rooms" onClick={resetSearchText}>Rooms</Link>
            <Link to="/FriendsList" onClick={resetSearchText}>Friends List</Link>
          </nav>
          <Switch>
            <Route path="/rooms">
              <RoomsRoutes
                auth={auth}
                user={user}
                db={db}
                friendsList={friendsList}
              />
            </Route>
            <Route path="/FriendsList">
              <FriendsList db={db} user={user} friendsList={friendsList} />
            </Route>
            <Route path="/Notifications">
              <NotificationsList db={db} user={user} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default SearchBar;
