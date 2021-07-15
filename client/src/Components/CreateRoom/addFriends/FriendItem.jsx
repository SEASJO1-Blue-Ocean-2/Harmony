import React from 'react';
import { PropTypes } from 'prop-types';
import FriendOnline from './FriendOnline';
import FriendAdd from './FriendAdd';

function AddFriends({ friend, addFriendHandler }) {
  return (
    <div className="row-default create-room-friend-item">
      <span>{friend.name}</span>
      <FriendOnline online={friend.online} />
      <FriendAdd addFriendHandler={addFriendHandler} />
    </div>
  );
}

export default AddFriends;

AddFriends.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    online: PropTypes.bool.isRequired,
  }).isRequired,
  addFriendHandler: PropTypes.func.isRequired,
};
