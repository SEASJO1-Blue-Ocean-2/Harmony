import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import RoomEntry from './RoomEntry.jsx';
import CreateRoom from './CreateRoom.jsx';
import Logout from './Logous.jsx';

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
=======

const RoomsList = (props) => {
  const [viewType, setView] = useState('your-rooms')
  const [yourRooms, setRooms] = useState(['list', 'of', 'rooms'])
  const [suggestedRooms, setSuggestions] = useState(['list', 'of', 'suggestions'])
  const handleViewType = () => {
    viewType === 'your-rooms'
    ? viewType === 'your-rooms'
      ? setView('suggestions')
      : null
    : viewType === 'suggestions'
      ? setView('your-rooms')
      : null
  }

  return (
    <div>
>>>>>>> temp

      <div className='toggle-room-container'>
        <button
        className='toggle-room-button'
<<<<<<< HEAD
        id='your-rooms'
        onClick={ handleViewType }
        >Your Rooms</button>
        <button
        className='toggle-room-button'
        id='suggested-rooms'
        onClick={ handleViewType }
=======
        onClick={handleViewType}
        >Your Rooms</button>
        <button
        className='toggle-room-button'
        onClick={handleViewType}
>>>>>>> temp
        >Room Suggestions</button>
      </div>

      <div className='rooms-list'>
        {viewType === 'your-rooms'
<<<<<<< HEAD
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
=======
        ? yourRooms.map( (room, i) => {
          <RoomEntry />
        })
        : suggestedRooms.map( (room, i) => {
          <RoomEntry />
        })}

      </div>
>>>>>>> temp
    </div>
  )
}

export default RoomsList;