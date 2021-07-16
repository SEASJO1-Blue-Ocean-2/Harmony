import React, { useState, useEffect } from 'react';
import CreateChannel from './CreateChannel';
import './RoomStyles.css';

export const TextMenu = ({ channels, channelId, setChannel, db, roomId }) => {
  return (
    <div className="text-menu">
      {Object.entries(channels).map((e) => {
        // e[0] appears to be channelId
        // e[1] is channel name?
        let active = '';
        if (e[0] === channelId) {
          active = 'channel-active';
        } else {
          active = 'channel-inactive';
        }
        return <div key={e[0]} className={active} onClick={() => setChannel(e[0])}>{e[1]}</div>;
      })}
      <CreateChannel db={db} roomId={roomId} voice={false} />
    </div>
  );
};

export const VoiceMenu = ({ channels, channelId, setChannel, db, roomId }) => {
  return (
    <div className="text-menu">
      {Object.entries(channels).map((e) => {
        return <div key={e[0]} onClick={() => setChannel(e[0])}>{e[1]}</div>;
      })}
      <CreateChannel db={db} roomId={roomId} voice={true} />
    </div>
  );
};
