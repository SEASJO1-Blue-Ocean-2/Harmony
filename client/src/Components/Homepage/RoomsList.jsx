import React, { useState, useEffect } from 'react';

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

      <div className='toggle-room-container'>
        <button
        className='toggle-room-button'
        onClick={handleViewType}
        >Your Rooms</button>
        <button
        className='toggle-room-button'
        onClick={handleViewType}
        >Room Suggestions</button>
      </div>

      <div className='rooms-list'>
        {viewType === 'your-rooms'
        ? yourRooms.map( (room, i) => {
          <RoomEntry />
        })
        : suggestedRooms.map( (room, i) => {
          <RoomEntry />
        })}

      </div>
    </div>
  )
}

export default RoomsList;