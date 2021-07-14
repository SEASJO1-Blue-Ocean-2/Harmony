import React from "react";
import { addData } from '../../util.js';

const CreateRoom = ({db, name}) => {
  const ref = db.ref('/rooms');
  return (
    <button className='create-a-room' onClick={() => {

      var data = {
        name: name,
        created: new Date(),
        channels: []
      };
      addData(data, ref);

    }}>Create a Room</button>
  )
}

export default CreateRoom;

///rooms/(roomId)/channels