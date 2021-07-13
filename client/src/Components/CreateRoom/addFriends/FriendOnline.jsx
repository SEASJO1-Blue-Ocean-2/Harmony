import React from 'react';
import { PropTypes } from 'prop-types';

function FriendOnline({ online }) {
  let friendStatus;
  if (online) {
    friendStatus = 'G';
  } else {
    friendStatus = 'R';
  }
  return (
    <span>
      {friendStatus}
    </span>
  );
}

export default FriendOnline;

FriendOnline.propTypes = {
  online: PropTypes.bool.isRequired,
};
