import React, { useState } from 'react';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import Friend from './Friend';
import IncomingButton from './IncomingButton';
import OutgoingButton from './OutgoingButton';
import FriendProfile from './FriendProfile';
import css from './friendStyles.css';

const FriendsList = ({ db, friendsList }) => {
  const [showFriendsList, setShowFriendsList] = useState(true);
  const [friendProfileId, setFriendProfileId] = useState('');

  const showFriendProfile = (id) => {
    setFriendProfileId(id);
    setShowFriendsList(false);
  };

  return (

    <div>
      {showFriendsList
        ? (
          <div data-test="friends-list">
            <h2 className="friends-list-title">Friends List</h2>
            <div className="friends-list-conatiner">
              <div>
                {friendsList.map((friendId) => (
                  <Friend
                    friendId={friendId.val()}
                    db={db}
                    key={friendId.key}
                    showFriendProfile={showFriendProfile}
                  />
                ))}
              </div>
            </div>
            <div className={css.incomingOutgoingContainer}>
              <IncomingButton />
              <OutgoingButton />
            </div>
          </div>
        )
        : (
          <FriendProfile
            db={db}
            friendId={friendProfileId}
            setShowFriendsList={setShowFriendsList}
          />
        )}
    </div>
  );
};

export default FriendsList;
