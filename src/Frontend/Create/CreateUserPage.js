import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


function CreateUser() {

  return (
    <div className="App">

      <h1>Welcome to User Page</h1>

      <Button variant="contained" style={{ margin: "20px" }} >
        <Link to="/listUser" style={{ textDecoration: 'none', color: "white" }}>List Users</Link>
      </Button>

    </div>
  );
}

export default CreateUser;
