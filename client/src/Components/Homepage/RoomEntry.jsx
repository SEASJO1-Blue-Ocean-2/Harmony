import React, {useState, useEffect} from 'react';

const RoomEntry = ({ room, click }) => {
  return (
    <div
    onClick={click}
    >{room}</div>
  )
}

export default RoomEntry;