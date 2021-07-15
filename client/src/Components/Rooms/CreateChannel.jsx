import React, { useState } from "react";

const { v4: uuidV4 } = require("uuid");

function CreateChannel({ forTest }) {
  const [create, setCreate] = useState(false);
  const [newChanName, setNewChanName] = useState('');

  if (forTest) {
    setCreate(true);
  }

  function showCreate(isShown) {
    if (isShown) {
      setCreate(false);
    } else {
      setCreate(true);
    }
  }

  function updateNewChanName() {

  }

  function createHandler() {

  }

  return(
    <div data-testid="create-channel">
      <button
        type="button"
        onClick={() => showCreate()}
      >
        Create Channel
      </button>
      {create ?
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
      : null}
    </div>
  );
}

export default CreateChannel;
