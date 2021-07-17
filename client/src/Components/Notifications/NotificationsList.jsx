/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useList } from 'react-firebase-hooks/database';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import './NotificationList.css';

const NotificationsList = ({ db, user }) => {
  const [notificationsList] = useList(db.ref('/requests'));
  return (
    <>
      <h2 className="currentPage">Notifications</h2>
      {notificationsList.map((element) => (
        element.val().to === user.bc.displayName
          ? (
            <div>
              <div className="unreadNotifications">
                {element.val().from}
                <div>
                  {element.val().type}
                </div>
              </div>
            </div>
          )
          : null
      ))}
    </>
  );
};

NotificationsList.propTypes = {
  db: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default NotificationsList;
