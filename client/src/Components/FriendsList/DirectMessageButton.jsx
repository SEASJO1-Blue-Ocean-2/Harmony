import React from 'react';

const DirectMessageButton = (props) => {
  const temp = '';

  // this button will send you to a DM chat session with the specified friend.
  // is this going to be a text room others can join or a seperate dm function.

  return (
    <div className="message-icon">
      <img className='directMessageButton' src='https://www.pinclipart.com/picdir/big/5-50447_message-clipart-letter-post-message-icon-vector-png.png' width='30px;'></img>
      {/* <img src="client/dist/assets/messageicon.png" /> */}
    </div>
  );
};

export default DirectMessageButton;
