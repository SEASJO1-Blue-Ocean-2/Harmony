import React from 'react';
import OutgoingRequest from './OutgoingRequest.jsx';

const OutgoingList = (props) => {
  const temp = '';
  return (
    <div>
      {/* this will map over friend requests still pending */}
      <OutgoingRequest />
    </div>
  );
};

export default OutgoingList;
