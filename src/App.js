import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Routes, Route} from "react-router-dom";
import CreateOrder from './Frontend/Create/CreateOrderPage';
import CreateOrderTask from './Frontend/Create/CreateOrderTaskPage';
import CreateComments from './Frontend/Create/CreateTaskComment';
import CreateNotificaion from './Frontend/Create/CreateUserNotifications';
import CreateUser from './Frontend/Create/CreateUserPage';
import CreateWorkflow from './Frontend/Create/CreateWorkflow';
import CreateWorkFlowDefintion from './Frontend/Create/CreateWorkflowDefinition';
import ReadWorkflow from './Frontend/Read/ReadWorkflow';
import DeleteWorkFlow from './Frontend/Delete/DeleteWorkflow';
import UpdateWorkFlow from './Frontend/Update/UpdateWorkflow';
import Home from './Frontend/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<CreateUser />} />
        <Route path="/order" element={<CreateOrder />} />
        <Route path="/ordertask" element={<CreateOrderTask />} />
        <Route path="/comments" element={<CreateComments />} />
        <Route path="/notification" element={<CreateNotificaion />} />
        <Route path="/workflow" element={<CreateWorkflow />} />
        <Route path="/workflowdefinition" element={<CreateWorkFlowDefintion />} />
        <Route path="/readworkflow" element={<ReadWorkflow />} />
        <Route path="/deleteworkflow" element={<DeleteWorkFlow />} />
        <Route path="/updateworkflow" element={<UpdateWorkFlow />} />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
