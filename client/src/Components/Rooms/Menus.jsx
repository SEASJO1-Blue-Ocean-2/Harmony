import React, { useState, useEffect } from 'react';
import CreateChannel from './CreateChannel';
import './RoomStyles.css';

export const TextMenu = ({ channels, channelId, setChannel, db, roomId }) => {
  return (
    <div className="text-menu">
      {Object.entries(channels).map((e) => {
        return <div onClick={() => setChannel(e[0])}>{e[1]}</div>;
      })}
      <CreateChannel db={db} roomId={roomId} />
    </div>
  );
};

export const VoiceMenu = ({ channels, channelId, setChannel }) => {
  return (
    <div className="text-menu">
      {Object.entries(channels).map((e) => {
        return <div onClick={() => setChannel(e[0])}>{e[1]}</div>;
      })}
    </div>
  );
};
