import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <img src='http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' className='profileIcon'></img>
      <div>
        <nav>
          <Link to="/Notifications">Notifications</Link>
          <Link to="/Rooms">Rooms</Link>
          <Link to="/FriendsList">Friends List</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Rooms">
            <Rooms />
          </Route>
          <Route path="/FriendsList">
            <FriendsList/>
          </Route>
          <Route path="/Notifications">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

function Home() {
  return <h2>Home</h2>;
}

function Rooms() {
  return <h2>Rooms</h2>;
}

function FriendsList() {
  return <h2>Friends List</h2>;
}