import css from './RoomsListStyles.css'
import React, { useState, useEffect } from 'react';
import { useList } from 'react-firebase-hooks/database';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import RoomEntry from './RoomEntry.jsx';
import CreateRoom from './CreateRoom.jsx';
import Logout from './Logout.jsx';


const RoomsList = ({ auth, db }) => {
  const [user, setUser] = useState(auth.currentUser.uid);
  const [viewType, setView] = useState('your-rooms');
  const [dbRef, setDbRef] = useState(db.ref('/rooms/'));
  const [snapshots, loading, error] = useList(dbRef);
  const [yourRooms, setRooms] = useState([]);
  const [suggestedRooms, setSuggestions] = useState(['list', 'of', 'suggestions']);

  const renderRooms = () => {
    let allRooms = snapshots.forEach(
      v => {
        let room = v.val()
        for (let key in room.users) {
          if (key === user) {
            yourRooms.push(room)
            setRooms([...yourRooms])
          }
        }
      })
    snapshots.forEach(v=>console.log(v.val().roomname))
  }

  useEffect(() => {
    renderRooms();
  }, [])

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
        onClick={ handleViewType }
        >Your Rooms</button>
        <button
        className={css.toggleRoomButton}
        id='suggested-rooms'
        onClick={ handleViewType }
        >Room Suggestions</button>
      </div>
        <div className={css.roomsList}>
          {viewType === 'your-rooms'
          ? yourRooms.map( (room, i) => {
            return (<Link to={`/room/${room.roomid}`} key={i}>
              <RoomEntry
              key={i}
              room={room}/>
            </Link>)
            })
          : suggestedRooms.map( (room, i) =>{
            return (<Link to={`/room/${room.roomid}`} key={i}>
              <RoomEntry
              key={i}
              room={room}/>
            </Link>)
            })}
        </div>
      <CreateRoom />
      <Logout auth={auth}/>

      <button onClick={test}>Test here</button>

      <button onClick={renderRooms}>Render Rooms Here</button>
    </div>
  )
}

export default RoomsList;