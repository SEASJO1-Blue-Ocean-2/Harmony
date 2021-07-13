import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './NotificationList.css';

const testNotifications = ['notification1', 'notification2', 'notification3'];

const NotificationsList = (props) => {
  return (
    <>
    <h2 className='currentPage'>Notifications</h2>
      {testNotifications.map((element)=>{

          return <div key={element} className='notification'>{element}</div>

      })}

    <div className ='clearNotifications'>Clear All</div>
   </>
  );
}

export default NotificationsList;
