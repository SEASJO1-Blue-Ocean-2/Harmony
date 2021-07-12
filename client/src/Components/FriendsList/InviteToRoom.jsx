import React, { useState } from 'react';

const InviteToRoom = (props) => {
  const inviteToRoom = () => {
    // something here with friends user id and room id
  };

  const handleInvite = (event) => {
    event.preventDefault();
    inviteToRoom();
  }
  return (
    <button type="button" onClick={handleInvite}>invite icon</button>
  );
};

export default InviteToRoom;
