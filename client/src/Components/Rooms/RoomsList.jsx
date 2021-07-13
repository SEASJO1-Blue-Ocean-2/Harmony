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

  const test = () => {
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
  }

  useEffect(() => {

  }, [snapshots])

  const handleViewType = (e) => {
    e.target.id === 'your-rooms'
    ? setView('your-rooms')
    : setView('suggested-rooms')
  }

  return (
    <div className='main-page'>
      <h2 className='currentPage'>Rooms List</h2>
      <div className='toggle-room-container'>
        <button
        className='toggle-room-button'
        id='your-rooms'
        onClick={ handleViewType }
        >Your Rooms</button>
        <button
        className='toggle-room-button'
        id='suggested-rooms'
        onClick={ handleViewType }
        >Room Suggestions</button>
      </div>
        <div className='rooms-list'>
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
<<<<<<< HEAD
      <Logout auth={props.auth}/>

=======
      <Logout auth={auth}/>
      <button onClick={test}>Test here</button>
>>>>>>> a2722f2 (Roomslist now lists a link to each of the rooms a user is apart of)
    </div>
  )
}

export default RoomsList;