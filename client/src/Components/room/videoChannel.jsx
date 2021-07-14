
import React, { useState, useEffect } from 'react';
import Peer from 'peerjs';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');
const peer = new Peer(undefined, {
  host: '/',
  port: '3001',
});

const VideoChannel = () => {

  return (
    <div className='videoRoom'>
    <div className="header">
      <div className="logo">
        <div className="header__back">
          <i className="fas fa-angle-left"></i>
        </div>
        <h3>Video Chat</h3>
      </div>
    </div>
    <div className="main">
      <div className="main__left">
        <div className="videos__group">
          <div id="video-grid"></div>
        </div>
        <div className="options">
          <div className="options__left">
            <div id="stopVideo" className="options__button">
              <i className="fa fa-video-camera"></i>
            </div>
            <div id="muteButton" className="options__button">
              <i className="fa fa-microphone"></i>
            </div>
          </div>
          <div className="options__right">
            <div id="inviteButton" className="options__button">
              <i className="fas fa-user-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};


export default VideoChannel;
