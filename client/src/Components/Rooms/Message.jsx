import React, { useState, useEffect } from 'react';


const Message = ({ data, uid }) => {
  var date = new Date(data.created);
  date = date.toString().slice(4,10);
  return (<div className={data.uid === uid ? 'sent-message' : 'received-message'} id='messages'>
    <div className='author'>
    {data.author}
    </div>
    <div>
    </div>
    <div className='date'>{data.created && date} </div>
    <br>
    </br>
    <div className='message'>
    {data.message}
      </div>
      <div className='mediaMessage'>
        <img src = {data.photo}  width='50px;'></img>
      </div>
  </div>);
};


export default Message;