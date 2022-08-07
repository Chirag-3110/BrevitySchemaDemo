import React from 'react';
import ReadOrderPage from '../Read/ReadOrderPage';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
function CreateOrder() {
  return (
    <div className="App">
      <h1>Welcome to OrderPage</h1>
      <Button variant="contained" >
        <Link to="/readOrder" style={{ textDecoration: 'none', color: "white" }}>Read Order</Link>
      </Button>
    </div>
  );
}

export default CreateOrder;
