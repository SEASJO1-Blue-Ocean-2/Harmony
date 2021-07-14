import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import RoomName from './roomName/RoomName';
import PublicPrivate from './publicPrivate/PublicPrivate';
import AddFriends from './addFriends/AddFriends';
import InviteUrl from './inviteUrl/InviteUrl';
import CreateButton from './createButton/CreateButton';

function CreateRoom({ db, auth }) {
  const [isPublic, setIsPublic] = useState(false);
  const friends = [
    {
      name: 'Alex',
      id: 0,
      online: true,
    },
    {
      name: 'Alex2',
      id: 1,
      online: true,
    },
    {
      name: 'Alex3',
      id: 2,
      online: false,
    },
  ];

  function createRoomHandler() {
    return null;
  }

  function addFriendHandler() {
    return null;
  }

  function publicPrivateHandler(event) {
    const roomStatus = event.target.value;
    if (roomStatus === 'public' && !isPublic) {
      setIsPublic(true);
    } else if (roomStatus === 'private' && isPublic) {
      setIsPublic(false);
    }
  }

  return (
    <div data-testid="create-room">
      <RoomName />
      <PublicPrivate
        publicPrivateHandler={publicPrivateHandler}
      />
      <AddFriends
        friends={friends}
        addFriendHandler={addFriendHandler}
      />
      <InviteUrl />
      <CreateButton
        createRoomHandler={createRoomHandler}
      />
    </div>
  );
}

export default CreateRoom;

CreateRoom.propTypes = {
  db: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
