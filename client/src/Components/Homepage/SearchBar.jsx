import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FriendsList from '../FriendsList/FriendsList.jsx';
import NotificationsList from '../Notifications/NotificationsList.jsx';
import RoomsList from '../Rooms/RoomsList.jsx';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleSubmitButton(event) {
    var currentDropDown = document.getElementsByClassName('currentPage')[0].innerText;
    var searchBarText = document.getElementById('searchBarText').value;
    if(currentDropDown === 'Friends List') {
      var currentFriends = document.getElementsByClassName('friend-container');
      for(var i = 0; i < currentFriends.length; i++) {
        if(!(currentFriends[i]).outerHTML.toLowerCase().includes(searchBarText)){
          currentFriends[i].remove();
          i--;
        } else {
        }
      }
    }
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
                <Link to="/Notifications">Notifications</Link>
                <Link to="/Rooms">Rooms</Link>
                <Link to="/FriendsList">Friends List</Link>
              </nav>
              <Switch>
                <Route path="/Rooms">
                  <RoomsList auth={this.props.auth} />
                </Route>
                <Route path="/FriendsList">
                  <FriendsList db={this.props.db} user={this.props.user} />
                </Route>
                <Route path="/Notifications">
                  <NotificationsList />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
  }
}





export default SearchBar;

