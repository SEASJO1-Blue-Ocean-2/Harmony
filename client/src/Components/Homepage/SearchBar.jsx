import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FriendsList from '../FriendsList/FriendsList.jsx';
import NotificationsList from '../Notifications/NotificationsList.jsx';
import RoomsRoutes from '../Rooms/RoomsRoutes.jsx';
import Logout from './Logout.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleSubmitButton(event) {
    var currentDropDown = document.getElementsByClassName('currentPage')[0].innerText;
    var searchBarText = document.getElementById('searchBarText').value;
    if (currentDropDown === 'Friends List') {
      var currentFriends = document.getElementsByClassName('friend-container');
      for (var i = 0; i < currentFriends.length; i++) {
        if (!(currentFriends[i]).outerHTML.toLowerCase().includes(searchBarText.toLowerCase())) {
          currentFriends[i].remove();
          i--;
        }
      }
    }
  }

  resetSearchText() {
    var currentSearchText = document.getElementById('searchBarText');
    currentSearchText.value = '';
  }

  render() {
    return (
      <>
        <div>

          <div className='search'>
            <input type='text' className='SearchBar' placeholder='Search' id='searchBarText'>
            </input>
            <button className='searchButton' onClick={this.handleSubmitButton}>Go!</button>
          </div>

          <Router>
            <div>
              <nav className='mainPageOptions'>
                <Link to="/Notifications" onClick={this.resetSearchText}>Notifications</Link>
                <Link to="/rooms" onClick={this.resetSearchText}>Rooms</Link>
                <Link to="/FriendsList" onClick={this.resetSearchText}>Friends List</Link>
              </nav>
              <Switch>
                <Route path="/rooms">
                  <RoomsRoutes
                    auth={this.props.auth}
                    user={this.props.user}
                    db={this.props.db}
                    friendsList={this.props.friendsList}
                  />
                </Route>
                <Route path="/FriendsList">
                  <FriendsList db={this.props.db} user={this.props.user} friendsList={this.props.friendsList}/>
                </Route>
                <Route path="/Notifications">
                  <NotificationsList db={this.props.db} user={this.props.user} />
                </Route>

              </Switch>
            </div>
          </Router>
          <Logout auth={this.props.auth} />
        </div>
      </>
    );
  }
}

export default SearchBar;
