import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Button } from '@material-ui/core';

import ReadUserNotifications from '../Read/ReadUserNotifications';
import * as mutations from  "../../graphql/mutations";

function CreateNotificaion() {
  
  const notificationDetails = {
    userNotificationsId: 'aakashagarwal1148@gmail.com',
    NotificationStatus: 'UNSEEN',
    NotificationContent: 'Testing Creation of notification',
    NotificationTime: "1930-01-01T16:00:00-07:00"
  }

  const CreateNotification = async () => {
    try {
      const newNotification = await API.graphql({query: mutations.createUserNotifications, authMode: 'API_KEY', variables: {input: notificationDetails}});
      console.log ('Notification created: ', newNotification);
    } catch (error) {
      console.log ({message: 'Error creating notification'});
    }
  }

  return (
    <div className="App">
      <h1>Welcome to NotificaionPage</h1>
      <ReadUserNotifications />

      <Button onClick={CreateNotification} >Create Notification</Button>

    </div>
  );
}

export default CreateNotificaion;
