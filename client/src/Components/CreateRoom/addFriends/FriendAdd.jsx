import React from 'react';
import { PropTypes } from 'prop-types';

function AddFriends({ addFriendHandler }) {
  return (
    <button
      type="button"
      onClick={addFriendHandler}
    >
      +
    </button>
  );
}

export default AddFriends;

AddFriends.propTypes = {
  addFriendHandler: PropTypes.func.isRequired,
};
