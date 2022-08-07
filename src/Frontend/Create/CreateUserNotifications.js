import React from 'react';
import { useState } from 'react';
import { API } from 'aws-amplify';

import ReadUserNotifications from '../Read/ReadUserNotifications';
import * as mutations from "../../graphql/mutations";

function CreateNotificaion() {

  const [userNotifId, setUserNotifId] = useState("");
  const [notifContent, setNotifContent] = useState("");

  const notificationDetails = {
    userNotificationsId: userNotifId,
    NotificationStatus: 'UNSEEN',
    NotificationContent: notifContent,
    NotificationTime: "1930-01-01T16:00:00-07:00"
  }

  const CreateNotification = async () => {
    try {
      const newNotification = await API.graphql({ query: mutations.createUserNotifications, authMode: 'API_KEY', variables: { input: notificationDetails } });
      console.log('Notification created: ', newNotification);
      setUserNotifId("");
      setNotifContent("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Welcome to NotificaionPage</h1>
      <ReadUserNotifications />

      <div>
        <div style={{ margin: 10}}>
          <label htmlFor="FormControlInput1">Enter User Notification Id:</label>
          <input type="email" id="FormControlInput1" placeholder="name@example.com" autoFocus required onChange={(e) => {setUserNotifId(e.target.value)}} />
        </div>
        <div style={{ margin: 10}}>
          <label htmlFor="FormControlInput2">Enter Notification Content:</label>
          <input type="text" id="FormControlInput2" placeholder='Write something here...' required onChange={(e) => {setNotifContent(e.target.value)}} />
        </div>
      </div>

      <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={CreateNotification} >Create Notification</button>

    </div>
  );
}

export default CreateNotificaion;
