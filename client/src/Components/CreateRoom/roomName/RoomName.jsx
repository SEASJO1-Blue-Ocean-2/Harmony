import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import RoomNameInUse from './RoomNameInUse';

function checkIfNameInDatabase(name) {
  if (name === '') {
    return false;
  }
  // todo: fill out this function
  return false;
}

function RoomName() {
  const [textValue, setTextValue] = useState('');
  const isInUse = checkIfNameInDatabase(textValue);
  return (
    <div id="create-room-roomname">
      <div>
        <span>
          Room Name:
        </span>
        <span>
          <input type="text" onChange={(e) => setTextValue(e.target.value)} />
        </span>
      </div>
      <div className="row-default">
        {textValue === '' ? <span /> : <RoomNameInUse isInUse={isInUse} /> }
      </div>
    </div>
  );
}

export default RoomName;
