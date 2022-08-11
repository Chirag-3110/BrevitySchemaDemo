import React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
function CreateOrderTask() {
  return (
    <div className="App">
      <h1>Welcome to OrderTaskPage</h1>
      <Button variant="contained" >
        <Link to="/ReadOrderTaskPage" style={{ textDecoration: 'none', color: "white" }}>Read Order</Link>
      </Button>
    </div>
  );
}

export default CreateOrderTask;
