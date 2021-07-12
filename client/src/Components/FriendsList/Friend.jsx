import React, { useState, useEffect } from 'react';
import InviteToRoom from './inviteToRoom.jsx'

const Friend = (props) => {
  const { friendId, db } = props;
  const [friendName, setFriendName] = useState('')
  const tempId = 'atkefMQZOGe0YQvC5sLBJd3zurY2'


  const friendNameRef = db.ref(`users/${tempId}/username`);



  useEffect(() => {
    friendNameRef.on('value', (snapshot) => {
      setFriendName(JSON.stringify(snapshot.val()));
    })
  })

  return (
    <div>
      <div>{friendName}</div>
      <InviteToRoom />
    </div>
  )
}

export default Friend;
