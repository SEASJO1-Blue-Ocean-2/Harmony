
import React, { useState, useEffect } from 'react';
import Peer from 'peerjs';
import { io } from "socket.io-client";
const socket = io();
const myPeer = new Peer(undefined, {
  host: '/', port: '3001'
});
const peers = {};

const VideoChannel = ({user, count ,setCount}) => {

  const [myVideoStream, setMyVideoStream] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const videoGrid = document.getElementById('video-grid');
    const myVideo = document.createElement('video');
    myVideo.muted = true;

    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        addVideoStream(myVideo, stream);

        socket.on('user-connected', (userId) => {
          console.log('connect to user')
          connectToNewUser(userId, stream);
        });

        myPeer.on('call', call => {
          console.log('test2')
          call.answer(stream);
          let video1 = document.createElement('video');
          call.on('stream', userVideoStream => {
            addVideoStream(video1, userVideoStream);
          });
        });
      });

    socket.on('user-disconnected', userId => {
      if (peers[userId]) {
        console.log('closing', peers[userId]);
        peers[userId].close();
      }
    });

    myPeer.on('open', (id) => {
      socket.emit('join-room', roomId, id, user);
    });
  }, []);

  const addVideoStream = (video, stream) => {
    console.log('adding a video stream')
    const videoGrid = document.getElementById('video-grid');
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
    videoGrid.append(video);
  };

  const connectToNewUser = (userId, stream) => {
    let call = myPeer.call(userId, stream);
    console.log('call');
    let userVideo = document.createElement('video');
    userVideo.muted = true;
    call.on('stream', (userVideoStream) => {
      addVideoStream(userVideo, userVideoStream);
    });
    call.on('close', () => {
      userVideo.remove();
      peers[userId] = null;
    });
    peers[userId] = call;
  };

  const handleStopVideo = (e) => {
    const enabled = myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getVideoTracks()[0].enabled = false;
      stopVideo.classList.toggle("background__red");
      stopVideo.innerHTML = `<i class="fas fa-video-slash"}></i>`;
    } else {
      myVideoStream.getVideoTracks()[0].enabled = true;
      stopVideo.classList.toggle("background__red");
      stopVideo.innerHTML = `<i class="fas fa-video"}></i>`;
    }
  }

  const handleMute = (e) => {
    const enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getAudioTracks()[0].enabled = false;
      muteButton.classList.toggle("background__red");
      muteButton.innerHTML = `<i class="fas fa-microphone-slash"></i>`;
    } else {
      myVideoStream.getAudioTracks()[0].enabled = true;
      muteButton.classList.toggle("background__red");
      muteButton.innerHTML = `<i class="fas fa-microphone"></i>`;
    }
  }

  const handleInvite = (e) => {
    prompt(
      "Copy this link and send it to people you want to meet with",
      window.location.href
    );
  }

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
            <div id="stopVideo" className="options__button" onClick={(e) => handleStopVideo(e)}>
              <i className="fa fa-video-camera" ></i>
            </div>
            <div id="muteButton" className="options__button" onClick={(e) => handleMute(e)}>
              <i className="fa fa-microphone"></i>
            </div>
          </div>
          <div className="options__right">
            <div id="inviteButton" className="options__button" onClick={(e) => handleInvite(e)}>
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
