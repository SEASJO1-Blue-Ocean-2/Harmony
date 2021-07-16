import React from 'react';
import { PropTypes } from 'prop-types';
import CreateLink from '../CreateLink';

function InviteUrl({ roomId }) {
  return (
    <div>
      {
        roomId ?
          <CreateLink href={`/rooms/${roomId}`}>Invite Url</CreateLink>
        : null
      }

    </div>

  );
}

export default InviteUrl;

InviteUrl.propTypes = {

};
