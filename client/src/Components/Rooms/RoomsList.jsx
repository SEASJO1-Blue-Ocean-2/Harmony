import React, { useState, useEffect } from 'react';
import RoomEntry from './RoomEntry.jsx';
import CreateRoom from './CreateRoom.jsx';
import Logout from './Logout.jsx';

const RoomsList = ({ user, auth, db }) => {
  const [viewType, setView] = useState('your-rooms');
  const [yourRooms, setRooms] = useState(['list', 'of', 'rooms']);
  const [suggestedRooms, setSuggestions] = useState(['list', 'of', 'suggestions']);

  const handleRoomClick = () => {
    // joins the room not sure how to route this yet.
    console.log('auth is here: ', auth)
    console.log('db is here: ', db)
    console.log('user is here: ', user)
  }

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
        ? yourRooms.map( (room, i) =>
          <RoomEntry
          key={i}
          room={room}
          click={ handleRoomClick }/>)
        : suggestedRooms.map( (room, i) =>
          <RoomEntry
          key={i}
          room={room}
          click={ handleRoomClick }/>)}
      </div>
      <CreateRoom />
      <Logout auth={props.auth}/>
    </div>
  )
}

export default RoomsList;