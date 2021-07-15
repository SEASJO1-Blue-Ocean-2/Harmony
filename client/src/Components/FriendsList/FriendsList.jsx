import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import Friend from './Friend.jsx';
import IncomingButton from './IncomingButton.jsx';
import OutgoingButton from './OutgoingButton.jsx';
import FriendProfile from './FriendProfile.jsx';
import css from './friendStyles.css';

const FriendsList = (props) => {
  const { db, user } = props;
  const [userId, setUserId] = useState(user.uid);
  const [friendsList, loading, error] = useList(db.ref(`friends/${userId}`));
  const [showFriendsList, setShowFriendsList] = useState(true);
  const [friendProfileId, setFriendProfileId] = useState('');
  // const [profileData, setProfileData] = ({});
  // console.log(typeof userId);
  // console.log('this is the friends lsit', friendsList);

  const showFriendProfile = (id) => {
    setFriendProfileId(id);
    setShowFriendsList(false);
  }

  useEffect(() => {
    // this will set state for user id with setUserId('whatever is passed from app on auth')
    // setUserId(user.uid);
  });

  const renderList = () => {
    if (showFriendsList) {

    }
  };

  return (
    <div>
      {showFriendsList
        ? (
          <div data-test="friends-list">
            <h2 className="friends-list-title" className='currentPage'>Friends List</h2>
            <div className="friends-list-conatiner">
              {!loading && friendsList.length > 0 && (
                <div>
                  {friendsList.map(friendId => (
                    <Friend
                      friendId={friendId.val()}
                      db={db}
                      key={friendId.key}
                      showFriendProfile={showFriendProfile}/>
                  ))}
                </div>
              )}
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
              setShowFriendsList={setShowFriendsList}/>
        )
      }
    </div>
  );
};

export default FriendsList;
