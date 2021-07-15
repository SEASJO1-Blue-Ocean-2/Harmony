import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import RoomsList from './RoomsList.jsx';
import CreateRoom from '../CreateRoom/CreateRoom.jsx';
import Room from '../room/Room.jsx';


const RoomsRoutes = ({ auth, db }) => {
  return (
    <Router>
      <Switch>
        <Route
          path='/rooms'
          render={() => <RoomsList auth={auth} db={db} />}
        />

        <Route
          path={`/room/:roomid`}
          render={match => <Room auth={auth} db={db} roomId={match} />}
        />

        <Route
          path="/create"
          render={() => <CreateRoom auth={auth} db={db} />}
        />

      </Switch>
    </Router>
  )
}

export default RoomsRoutes;