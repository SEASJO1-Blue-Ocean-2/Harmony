import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function AddFriends({ friend, addFriendHandler }) {
  const [clicked, setClicked] = useState('+');

  function friendAdded() {
    if (clicked === '+') {
      addFriendHandler(friend, true)
      setClicked('-');
    } else {
      addFriendHandler(friend, false);
      setClicked('+');
    }
  }

  return (
    <button
      type="button"
      onClick={friendAdded}
    >
      {clicked}
    </button>
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
