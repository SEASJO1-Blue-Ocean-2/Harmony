import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import RoomsList from './RoomsList.jsx';
import CreateRoom from '../CreateRoom/CreateRoom.jsx';
import Room from './Room.jsx';


const RoomsRoutes = ({ auth, db, user, friendsList }) => {
  return (
    <Router>
      <Switch>

        <Route
          exact
          path='/rooms'
          render={() => <RoomsList auth={auth} db={db} />}
        />

        <Route
          path='/rooms/:roomid'
          render={match => <Room auth={auth} db={db} roomId={match.match.params.roomid} />}
        />

        <Route
          path="/create"
          render={() => <CreateRoom user={user} db={db} friendsList={friendsList} />}
        />

      </Switch>
    </Router>
  )
}

export default RoomsRoutes;