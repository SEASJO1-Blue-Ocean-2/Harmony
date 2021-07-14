import css from './RoomsListStyles.css'
import React, { useState, useEffect } from 'react';
import { useList } from 'react-firebase-hooks/database';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Room from '../room/Room.jsx';
import RoomEntry from './RoomEntry.jsx';
import CreateRoomButton from './CreateRoomButton.jsx';

import Logout from './Logout.jsx';

const RoomsList = ({ auth, db }) => {
  const [user, setUser] = useState(auth.currentUser.uid);
  const [viewType, setView] = useState('your-rooms');
  const [dbRef, setDbRef] = useState(db.ref('/rooms/'));
  const [snapshots, loading, error] = useList(dbRef);
  const [yourRooms, setRooms] = useState([]);
  const [suggestedRooms, setSuggestions] = useState(['list', 'of', 'suggestions']);

  const renderRooms = () => {
    snapshots.forEach(
      v => {
        let room = v.val()
        for (let uid in room.users) {
          if (uid === user) {
            room.roomid = v.key;
            yourRooms.push(room);
            setRooms([...yourRooms]);
            break;
          }
        }
      });
  }

  useEffect(() => {
    renderRooms();
  }, [snapshots])

  const handleViewType = (e) => {
    e.target.id === 'your-rooms'
      ? setView('your-rooms')
      : setView('suggested-rooms')
  }

  return (
    <div className={css.mainpage}>
      <h2 className='currentPage'>Rooms List</h2>
      <div className={css.toggleRoomContainer}>
        <button
          className={css.toggleRoomButton}
          id='your-rooms'
          onClick={handleViewType}
        >Your Rooms</button>
        <button
          className={css.toggleRoomButton}
          id='suggested-rooms'
          onClick={handleViewType}
        >Room Suggestions</button>
      </div>

      <div className={css.roomsList}>
        {viewType === 'your-rooms'
          ? yourRooms.map((room, i) => {
            return (<Link to={`/room/${room.roomid}`} key={i}>
              <RoomEntry
                key={i}
                room={room} />
            </Link>)
          })
          : suggestedRooms.map((room, i) => {
            return (<Link to={`/room/${room.roomid}`} key={i}>
              <RoomEntry
                key={i}
                room={room} />
            </Link>)
          })}
      </div>

      <CreateRoomButton />
      <Logout auth={auth} />
    </div>
  )
}

export default RoomsList;