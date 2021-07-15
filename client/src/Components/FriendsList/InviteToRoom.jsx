import React, { useState } from 'react';

const InviteToRoom = (props) => {
  const inviteToRoom = () => {
    // this will either open a pop up of rooms the auth user is joind to so an invite can be sent
    // or redirect to a different page with "Invite ${friend name} to: then show a list of rooms"
  };

  const handleInvite = (event) => {
    event.preventDefault();
    inviteToRoom();
  };

  return (
    <div className="message-icon">
      <img className='inviteIcon' src='https://www.pngkey.com/png/full/408-4088649_group-s-contacts-people-chat-message-talk-im.png' width='30px;'></img>
    </div>
  );
};

export default InviteToRoom;
