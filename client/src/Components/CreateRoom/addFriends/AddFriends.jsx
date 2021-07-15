import React from 'react';
import { PropTypes } from 'prop-types';
import FriendItem from './FriendItem';

function AddFriends({ friends, addFriendHandler }) {
  const addFriendsList = friends.map((friend) => (
    <FriendItem
      key={friend.key}
      friend={friend}
      addFriendHandler={addFriendHandler}
    />
  ));
  return (
    <div className="column-default">
      <div>
        <span className='addFriends'>
          Add Friends:
        </span>
      </div>
      {addFriendsList}
    </div>
  );
}

export default AddFriends;

AddFriends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  addFriendHandler: PropTypes.func.isRequired,
};
