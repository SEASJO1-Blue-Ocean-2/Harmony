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

//<Room auth={auth} db={db} roomId={match.match.params.roomId}/>
const RoomsRoutes = ({ auth, db, user }) => {
return (
  <Router>
      <Switch>
        <Route
          path='/rooms'
          render={() => <RoomsList auth={auth} db={db}/>}
        />

        <Route path='/room/:roomid' render={match =>  <Room auth={auth} db={db} roomId={match.match.params.roomid}/>}/>

        <Route
          path="/create"
          render={() => <CreateRoom user={user} db={db} />}
        />


      </Switch>
    </Router>
)}

export default RoomsRoutes;