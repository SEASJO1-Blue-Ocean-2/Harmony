import React from 'react';
import { PropTypes } from 'prop-types';

function RoomNameInUse({ isInUse }) {
  if (isInUse) {
    return (
      <span className="text-red">Room name is in use.</span>
    );
  }
  return (
    <span className="text-green">Name is not in use.</span>
  );
}

export default RoomNameInUse;

RoomNameInUse.propTypes = {
  isInUse: PropTypes.bool.isRequired,
};
