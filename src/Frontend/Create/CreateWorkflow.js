import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Link } from "react-router-dom";
import AddWorkflow from '../../Backend/APIS/WorkFlowAPI/AddWorkflow';
import getUser from '../../Backend/APIS/UserTableAPI/GetUser';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function CreateWorkflow() {
  const [workflowname,setWorkflowName]=useState(null);
  const [workDesc,setWorkDesc]=useState(null);
  const [userMail,seUserMail]=useState(null);
  const [workFlowJson,setWorkflowJson]=useState("{\"a\":1, \"b\":3, \"string\": 234}")
  const [saveAsDraft,setSaveAsDraft]=useState(true)

  const addworrkflow=async()=>{
    try {
      if(workflowname==null || workDesc==null ||userMail==null || workFlowJson==null)
        throw "enter all fields";
      let workFlowResponse=await AddWorkflow(workflowname,workDesc,userMail,workFlowJson,saveAsDraft)
      console.log(workFlowResponse);
      if(workFlowResponse)
        alert("Workflow created");
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="App">
      <h1>Create WorkFlow</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField style={{margin:10,width:200}} id="outlined-basic" label="Workflow Name" variant="outlined" 
            onChange={(name)=>setWorkflowName(name.target.value)}
          />
          <TextField style={{margin:10,width:200}} id="outlined-basic" label="Workflow Description" variant="outlined"
            onChange={(desc)=>setWorkDesc(desc.target.value)}
          />
          <TextField style={{margin:10,width:200}} id="outlined-basic" label="UserID" variant="outlined" 
            onChange={(mail)=>seUserMail(mail.target.value)}
          />
          <Switch {...label} defaultChecked onClick={()=>setSaveAsDraft(!saveAsDraft)} />
          <p>Save As Draft</p>
        </div>
        <Button variant="contained" onClick={addworrkflow}>Add WorkFlow</Button>
        <Button variant="contained" >
            <Link to="/readworkflow" style={{ textDecoration: 'none', color: "white" }}>Read Workflow</Link>
        </Button>
        <Button variant="contained" >
            <Link to="/deleteworkflow" style={{ textDecoration: 'none', color: "white" }}>Delete Workflow</Link>
        </Button>
        <Button variant="contained" >
            <Link to="/updateworkflow" style={{ textDecoration: 'none', color: "white" }}>Update Workflow</Link>
        </Button>
      </Box>
    </div>
  );
}

export default CreateWorkflow;
