import React, { useState, useEffect } from 'react';


const Message = ({ data }) => {

  return (<div>
    {data.author} wrote: {data.message} {data.created && new Date(data.created).toLocaleDateString("en-US")}
  </div>);
};


export default Message
