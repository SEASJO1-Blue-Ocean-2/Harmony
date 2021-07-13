import React, {useState, useEffect} from 'react';

const RoomEntry = ({ room, click }) => {
  return (
    <div
    className='room-entry'>
    {room.roomname}
    </div>
  )
}

export default RoomEntry;

/*
channels: "channelId2"
default_channel: "channelId2"
private: false
roomid: "idhere"
roomname: "namehere"
*/