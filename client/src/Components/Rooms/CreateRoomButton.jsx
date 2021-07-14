import React from "react";
import { Link } from 'react-router-dom';

const CreateRoomButton = (props) => {
  return (
    <Link to="/create">
      <button className='create-a-room'>Create a Room</button>
    </Link>
  )
}

export default CreateRoomButton;
