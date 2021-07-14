import React, { useState, useEffect } from 'react';
import RoomEntry from './RoomEntry.jsx';
import CreateRoom from './CreateRoom.jsx';
import Logout from './Logout.jsx';
import { Redirect } from "react-router-dom";


const RoomsList = (props) => {
  const [viewType, setView] = useState('your-rooms');
  const [yourRooms, setRooms] = useState(['list', 'of', 'rooms']);
  const [suggestedRooms, setSuggestions] = useState(['list', 'of', 'suggestions']);
  const [destId, setDest] = useState(null);

  const handleRoomClick = (e) => {
    // joins the room not sure how to route this yet.
    setDest('r1')
  }

  const handleViewType = (e) => {
    e.target.id === 'your-rooms'
    ? setView('your-rooms')
    : setView('suggested-rooms')
  }
  return (
    <div className='main-page'>
      {destId && <Redirect to={"/room/" + destId}/> }
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
      <CreateRoom name={'Room ' + Math.floor(Math.random() * 1000)} db={props.db}/>
      <Logout auth={props.auth}/>

    </div>
  )
}

export default RoomsList;