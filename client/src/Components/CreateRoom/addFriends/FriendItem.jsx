import React from 'react';
import { PropTypes } from 'prop-types';
import FriendOnline from './FriendOnline';
import FriendAdd from './FriendAdd';

function AddFriends({ friend, addFriendHandler }) {
  return (
    <div className="row-default create-room-friend-item">
      <span className='friendCreateRoom'>{friend.displayName}</span>
      <FriendAdd addFriendHandler={addFriendHandler} friend={friend} />
    </div>
  );
}

export default AddFriends;

AddFriends.propTypes = {
  friend: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  }).isRequired,
  addFriendHandler: PropTypes.func.isRequired,
};
