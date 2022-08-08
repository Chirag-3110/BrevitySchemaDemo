import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RemoveWorkFlow from '../../Backend/APIS/WorkFlowAPI/RemoveWorkFlow';

function DeleteWorkFlow() {
  const [workflowID, setWorkflowID] = useState(null);

  const deleteWorkFlow = async () => {
    try {
      if (workflowID == null)
        throw "Enter ID";

      let deletedWorkFlow = await RemoveWorkFlow(workflowID);

      if (deletedWorkFlow) {
        alert("workflow deleted");
      }
    }
    catch (error) {
      alert(error);
    }
  }

  return (
    <div className="App">
      <h1>Delete WorkFlow</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Workflow ID" variant="outlined"
            onChange={(id) => setWorkflowID(id.target.value)}
          />
        </div>
        <Button variant="contained" onClick={deleteWorkFlow}>Delete WorkFlow</Button>
      </Box>
    </div>
  );
}

export default DeleteWorkFlow;
