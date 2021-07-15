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
    <button type="button" onClick={handleInvite}>invite icon</button>
  );
};

export default InviteToRoom;
