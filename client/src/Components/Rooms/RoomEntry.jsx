import css from './RoomEntryStyles.css'
import React, { useState, useEffect } from 'react';

const RoomEntry = ({ room }) => {
  const [userCount, setCount] = useState(0);

  useEffect(() => {
    countUsers(room.users)
  }, []);

  const countUsers = (users) => {
    let count = 0;
    for (let key in users) {
      count++;
    }
    setCount(count);
  }

  return (
    <div
    className={css.roomEntry}>
      <div className='roomName'>
      {room.room_name}
      </div>
      <div className='userCount'>
      {userCount} users
      </div>

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