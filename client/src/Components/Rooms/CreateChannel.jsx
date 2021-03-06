import React, { useState } from "react";
import { PropTypes } from 'prop-types';

const { v4: uuidV4 } = require("uuid");

function CreateChannel({ forTest, db , roomId, voice }) {
  const [create, setCreate] = useState(false);
  const [newChanName, setNewChanName] = useState('');

  if (forTest) {
    setCreate(true);
  }

  function showCreate() {
    setCreate(!create);
  }

  function updateNewChanName(event) {
    const name = event.target.value;
    setNewChanName(name);
  }

  function createHandler() {
    let channels = 'channels'
    const newChanId = uuidV4();
    if (voice) {
      channels = 'voice_channels';
    }
    db.ref(`rooms/${roomId}/${channels}/${newChanId}`).set(newChanName);
    setCreate(false);
  }

  return(
    <div data-testid="create-channel">
      <button
        type="button"
        onClick={() => showCreate()}
      >
        {
          create ?
            'Cancel'
          :
            'Create Channel'
        }
      </button>
      {
        create ?
          <div className="row-default">
            <span>
              Name:
            </span>
            <span>
              <input
                type="text"
                onChange={updateNewChanName}
              />
            </span>
            <span>
              <button
                type="button"
                onClick={createHandler}
              >
                Create
              </button>
            </span>
          </div>
        : null
      }
    </div>
  );
}

export default CreateChannel;

CreateChannel.propTypes = {
  db: PropTypes.object.isRequired,
  roomId: PropTypes.string.isRequired,
  voice: PropTypes.bool.isRequired,
}