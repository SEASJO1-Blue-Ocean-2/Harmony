import React, {useState, useEffect} from 'react';

const RoomEntry = ({ room, click }) => {
  return (
    <div
    className='room-entry'
    onClick={click}>
    {room}
    </div>
  )
}

export default RoomEntry;
