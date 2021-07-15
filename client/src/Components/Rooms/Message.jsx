import React, { useState, useEffect } from 'react';


const Message = ({ data, uid }) => {

  return (
    <div className={data.uid === uid ? 'sent-message' : 'received-message'}>
      {data.author} wrote: {data.message} {data.created && new Date(data.created).toLocaleDateString("en-US")}
      <div>
        <img src={data.photo} width="50px;"/>
      </div>
    </div>

  );
};


export default Message;
