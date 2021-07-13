import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import RoomsList from '../Rooms/RoomsList.jsx';
import FriendsList from '../FriendsList/FriendsList.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <div>
        <input type='text' className='SearchBar' placeholder='Search'>
        </input>
        <Router>
          <div>
            <nav className='mainPageOptions'>
              <Link to="/Notifications">Notifications</Link>
              <Link to="/Rooms">Rooms</Link>
              <Link to="/FriendsList">Friends List</Link>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Rooms">
                <RoomsList />
              </Route>
              <Route path="/FriendsList">
                <FriendsList db = {this.props.db} user = {this.props.user}/>
              </Route>
              <Route path="/Notifications">
                <Notifications />
              </Route>
            </Switch>
          </div>
        </Router>
        </div>
      </>
    );
  }
}

function Rooms() {
  return <h2 className='currentPage'>Rooms</h2>;
}

function Friends() {
  return <h2 className='currentPage'>Friends List</h2>;
}

function Notifications() {
  return <h2 className='currentPage'>Notifications</h2>;
}



export default SearchBar;

