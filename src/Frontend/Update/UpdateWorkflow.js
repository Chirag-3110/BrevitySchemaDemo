import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

import ModifyWorkFLow from '../../Backend/APIS/WorkFlowAPI/ModifyWorkFlow';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function UpdateWorkFlow() {

  const [workflowID, setWorkflowID] = useState(null);
  const [workflowname, setWorkflowName] = useState(null);
  const [workDesc, setWorkDesc] = useState(null);
  const [userMail, seUserMail] = useState(null);
  const [workFlowJson, setWorkflowJson] = useState("{\"a\":1, \"b\":3, \"string\": 234}")
  const [saveAsDraft, setSaveAsDraft] = useState(true)

  const addworrkflow = async () => {
    try {

      if (workflowID == null) throw "Enter ID for updation";
      if (workflowname == null) throw 'Enter Workflow Name';
      if (workDesc == null) throw 'Enter Workflow Description';
      if (userMail == null) throw 'Enter User Mail';
      if (workFlowJson == null) throw 'Enter Workflow Json';

      let workFlowResponse = await ModifyWorkFLow(workflowID, workflowname, workDesc, userMail, workFlowJson, saveAsDraft)

      console.log(workFlowResponse);

      if (workFlowResponse)
        alert("Workflow Updates");
    }
    catch (error) {
      alert(error)
    }
  }

  return (
    <div className="App">
      <h1>Update WorkFlow</h1>
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
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Workflow Name" variant="outlined"
            onChange={(name) => setWorkflowName(name.target.value)}
          />
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Workflow Description" variant="outlined"
            onChange={(desc) => setWorkDesc(desc.target.value)}
          />
          <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="UserID" variant="outlined"
            onChange={(mail) => seUserMail(mail.target.value)}
          />
          <Switch {...label} defaultChecked onClick={() => setSaveAsDraft(!saveAsDraft)} />
          <p>Save As Draft</p>
        </div>
        <Button variant="contained" onClick={addworrkflow}>Update</Button>
      </Box>
    </div>
  );
}

export default UpdateWorkFlow;
