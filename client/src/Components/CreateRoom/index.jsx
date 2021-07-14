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
  const [newName, setNewName] = useState('');
  const [usersWithAccess, setUsersWithAccess] = useState({[user.uid]: user.displayName});
  const [createClicked, setCreateClicked] = useState(false);
  const friends = [
    {
      displayName: 'Alex',
      id: 0,
      online: true,
      uid: 'fake_uid_1'
    },
    {
      displayName: 'Alex2',
      id: 1,
      online: true,
      uid: 'fake_uid_2'
    },
    {
      displayName: 'Alex3',
      id: 2,
      online: false,
      uid: 'fake_uid_3'
    },
  ];

  function createRoomHandler() {
    if (createClicked) {
      // already clicked with this name, maybe give user some info
      return null;
    }
    const newRoomId = uuidV4();
    db.ref(`rooms/${newRoomId}`).set({
      room_name: newName,
      channels: [
        'General',
      ],
      voice_channels: [
        'Voice',
      ],
      default_channel: 0,
      public: isPublic,
      users: usersWithAccess,
    });
    const uidList = Object.keys(usersWithAccess)
    uidList.forEach((uid) => addRoomIdToUserRecordInDb(uid, newRoomId));
    redirectToNewRoom(newRoomId);
    setCreateClicked(true);
  }

  function addRoomIdToUserRecordInDb(uid, roomId) {
    // TODO: this function needs to add room ID to users/user.uid ref
    db.ref(`users/${uid}/rooms/${roomId}`).set(newName);
  }

  function redirectToNewRoom(roomId) {
    // TODO: redirect to room
    // possibly use same function that opens room in room module
  }

  function addFriendHandler(friend) {
    usersWithAccess[friend.uid] = friend.displayName;
    console.log(usersWithAccess)
  }

  function publicPrivateHandler(event) {
    const roomStatus = event.target.value;
    if (roomStatus === 'public' && !isPublic) {
      setIsPublic(true);
    } else if (roomStatus === 'private' && isPublic) {
      setIsPublic(false);
    }
  }

  function nameHandler(event) {
    setNewName(event.target.value);
    // if name changes, let user sumbit again
    setCreateClicked(false);
    // set room name here in state
    // should have a debouncer
  }
  return (
    <div data-testid="create-room">
      <RoomName
        nameHandler={nameHandler}
      />
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
