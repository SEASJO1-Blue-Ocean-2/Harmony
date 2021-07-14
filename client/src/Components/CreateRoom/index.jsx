import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import RoomName from './roomName/RoomName';
import PublicPrivate from './publicPrivate/PublicPrivate';
import AddFriends from './addFriends/AddFriends';
import InviteUrl from './inviteUrl/InviteUrl';
import CreateButton from './createButton/CreateButton';

const { v4: uuidV4 } = require('uuid');

function CreateRoom({ db, user }) {
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
    const roomName = 'room test';
    const newRoomId = uuidV4();
    const userId = user.uid;
    db.ref(`rooms/${newRoomId}`).set({
      room_name: roomName,
      channels: [
        'General',
      ],
      default_channel: 0,
      public: isPublic,
      users: [
        userId,
      ],
    });
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
  user: PropTypes.object.isRequired,
};
