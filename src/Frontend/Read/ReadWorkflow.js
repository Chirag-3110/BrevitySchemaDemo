import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import GetWorkFlow from '../../Backend/APIS/WorkFlowAPI/GetWorkFlow';
import ListWorkflow from '../../Backend/APIS/WorkFlowAPI/ListWorkFlow';
import OrganizationWorkflow from '../../Backend/APIS/WorkFlowAPI/OrganizationWorkFlow';

function ReadWorkflow() {

  const [workflowID, setWorkflowID] = useState(null);
  const [Organization, setOrganization] = useState(null);

  const getWorkFlow = async () => {
    try {
      if (workflowID == null)
        throw "Enter ID";

      let workFlow = await GetWorkFlow(workflowID);

      if (workFlow) {
        alert("Queried workflow");
        console.log(workFlow);
      }
    }
    catch (error) {
      alert(error)
    }
  }

  const listWorkFlow = async () => {
    try {
      const workflowList = await ListWorkflow();

      if (workflowList) {
        alert("List is fetched");
        console.log(workflowList);
      }
    }
    catch (error) {
      alert(error)
    }
  }

  const organiationWorkFlow = async () => {
    try {
      if (Organization == null) throw "Enter Organization Name";

      const organizationworkflowList = await OrganizationWorkflow(Organization);

      if (organizationworkflowList) {
        alert("List is fetched");
        console.log(organizationworkflowList);
      }
    }
    catch (error) {
      alert(error)
    }
  }

  return (
    <div className="App">
      <h1>Query WorkFlow</h1>
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
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Organization Name" variant="outlined"
            onChange={(Organization) => setOrganization(Organization.target.value)}
          />
        </div>

        <Button variant="contained" onClick={getWorkFlow}>Get WorkFlow</Button>
        <Button variant="contained" onClick={listWorkFlow}>List WorkFlow</Button>
        <Button variant="contained" onClick={organiationWorkFlow}>Organiation WorkFlow</Button>

      </Box>
    </div>
  );
}

export default ReadWorkflow;
