import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ListUserByOrg from '../../Backend/APIS/UserAPI/ListUserByOrg';

function ReadUsersByOrg() {

  const [organizationName, setOrganizationName] = useState("");

    const ListUsers = async () => {

        if (organizationName === "") {
            alert ('Enter organization name');
        } else {
            try {
                const userList = await ListUserByOrg (organizationName);
                
                console.log (userList)  
            } catch (error) {
                console.log(error);
            }
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

        <div>
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Organization Name" variant="outlined"
            onChange={(organizationName) => setOrganizationName(organizationName.target.value)}
          />
        </div>

        <Button variant="contained" style={{ margin: "20px" }} onClick={ListUsers}>
           List Users
        </Button>

      </div>
    </Box>
  );
}

export default ReadUsersByOrg
