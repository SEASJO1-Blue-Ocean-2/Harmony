import React, { useState, useEffect } from 'react';


const Message = ({ data, uid }) => {

  return (<div className={data.uid === uid ? 'sent-message' : 'received-message'} id='messages'>
    <div className='author'>
    {data.author}
    </div>

    <div className='date'>{data.created && new Date(data.created).toLocaleDateString("en-US")} </div>
    <br>
    </br>
    <div className='message'>
    {data.message}
      </div>
  </div>);
};


export default Message
