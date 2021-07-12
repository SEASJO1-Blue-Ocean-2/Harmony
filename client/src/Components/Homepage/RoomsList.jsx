import React, { useState, useEffect } from 'react';
import RoomEntry from './RoomEntry.jsx';
import CreateRoom from './CreateRoom.jsx';
import Logout from './Logout.jsx';

const RoomsList = (props) => {
  const [viewType, setView] = useState('your-rooms');
  const [yourRooms, setRooms] = useState(['list', 'of', 'rooms']);
  const [suggestedRooms, setSuggestions] = useState(['list', 'of', 'suggestions']);

  const handleRoomClick = () => {
    // joins the room not sure how to route this yet.
  }

  const handleViewType = (e) => {
    e.target.id === 'your-rooms'
    ? setView('your-rooms')
    : setView('suggested-rooms')
  }

  return (
    <div className='main-page'>

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
      <Logout />
    </div>
  )
}

export default RoomsList;