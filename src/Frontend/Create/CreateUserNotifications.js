import React from 'react';
import { useState } from 'react';
import AddNotif from '../../Backend/APIS/NotificationAPI/AddNotif';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function CreateNotificaion() {

  const [userNotifId, setUserNotifId] = useState("");
  const [notifContent, setNotifContent] = useState("");
  
  const CreateNotification = async () => {
    try {
      if (userNotifId == null || notifContent == null) {
        console.log("enter all the fields")
      }
      let notifResponse = await AddNotif(userNotifId, notifContent)
      if (notifResponse)
        console.log("notification Craeted")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="App">
        <h1>Welcome to NotificaionPage</h1>

        <div>
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Notification UserId" variant="outlined"
            onChange={(userNotifId) => setUserNotifId(userNotifId.target.value)}
          />
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Notification Content" variant="outlined"
            onChange={(notifContent) => setNotifContent(notifContent.target.value)}
          />
        </div>
        <Button variant="contained" onClick={CreateNotification}>Add Notification</Button>
        <Button variant="contained" style={{ margin: "20px" }} >
          <Link to="/listNotif" style={{ textDecoration: 'none', color: "white" }}>List all Notificaions</Link>
        </Button>

      </div>
    </Box>
  );
}

export default CreateNotificaion;
