import css from './RoomEntryStyles.css'
import React, {useState, useEffect} from 'react';

const RoomEntry = ({ room, click }) => {
  return (
    <div
    className={css.roomEntry}>
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