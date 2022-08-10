import React, { useState } from 'react';

import AddComment from '../../Backend/APIS/CommentAPI/AddComment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function CreateComments() {

  const [commentPath, setCommentPath] = useState("");
  const [filePath, setFilePath] = useState("");

  const createComment = async () => {
    try {
      if (commentPath === "") {
        alert ('Enter Comment Path');
      } 
      else if(filePath === "") {
        alert ('Enter File Path');
      } 
      else {
        let commentResponse = await AddComment(commentPath, filePath)
        
        if (commentResponse)
          console.log(commentResponse);
      }
    } catch (error) {
      console.log({ message: 'Error creating Comment' });
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
        <h1>Welcome to CommentPage</h1>

        <div>
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Enter CommentPath" variant="outlined"
            onChange={(commentPath) => setCommentPath(commentPath.target.value)}
          />
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Enter filePath" variant="outlined"
            onChange={(filePath) => setFilePath(filePath.target.value)}
          />
        </div>
        
        <Button style={{ margin: "20px" }} variant="contained" onClick={createComment}>Add Comment</Button>

        <Button variant="contained" style={{ margin: "20px" }} >
          <Link to="/listComments" style={{ textDecoration: 'none', color: "white" }}>List all Comment</Link>
        </Button>
        <Button variant="contained" style={{ margin: "20px" }} >
          <Link to="/deleteComments" style={{ textDecoration: 'none', color: "white" }}>Delete Comment</Link>
        </Button>

      </div>
    </Box>
  );
}

export default CreateComments;
