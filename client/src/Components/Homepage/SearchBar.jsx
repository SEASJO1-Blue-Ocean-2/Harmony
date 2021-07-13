import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<<<<<<< HEAD

import RoomsList from '../Rooms/RoomsList.jsx';
import FriendsList from '../FriendsList/FriendsList.jsx';
import NotificationsList from '../Notifications/NotificationsList.jsx';
=======
import Test from './test.jsx';
import RoomsList from '../Rooms/RoomsList.jsx';

>>>>>>> 60ee25c (merging before pull)

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  handleSearchBarChange(event) {
    var currentDropDown = document.getElementsByClassName('currentPage')[0].innerText;
    console.log(currentDropDown);
    console.log(event.target.value);
  }

  render() {
    return (
      <>
        <div>
        <input type='text' className='SearchBar' placeholder='Search' onChange={this.handleSearchBarChange}>
        </input>
        <Router>
          <div>
            <nav className='mainPageOptions'>
              <Link to="/Notifications">Notifications</Link>
              <Link to="/Rooms">Rooms</Link>
              <Link to="/FriendsList">Friends List</Link>
            </nav>

            <Switch>
              <Route path="/Rooms">
                <RoomsList />
              </Route>
              <Route path="/FriendsList">
<<<<<<< HEAD
                <FriendsList db = {this.props.db} user = {this.props.user}/>
=======
                <FriendsList/>
                {/* <FriendsList db ={db} user={user} /> */}
>>>>>>> 60ee25c (merging before pull)
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

