import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import firebase from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';
import './NotificationList.css';

const NotificationsList = (props) => {
  const [notificationsList] = useList(props.db.ref('/requests'));
  return (
    <>
      <h2 className="currentPage">Notifications</h2>
      {notificationsList.map((element) => (
        element.val().to == props.user.bc.displayName
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

export default NotificationsList;
