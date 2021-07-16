import React from 'react';
import { PropTypes } from 'prop-types';

function CreateButton({ createRoomHandler }) {
  return (
    <button
      type="button" className='createRoomButton'
      onClick={createRoomHandler}
    >
      Create Room
    </button>
  );
}
export default CreateButton;

CreateButton.propTypes = {
  createRoomHandler: PropTypes.func.isRequired,
};
