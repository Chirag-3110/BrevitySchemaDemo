import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Routes, Route } from "react-router-dom";

import Home from './Frontend/Home';

import CreateOrder from './Frontend/Create/CreateOrderPage';
import CreateOrderTask from './Frontend/Create/CreateOrderTaskPage';
import CreateComments from './Frontend/Create/CreateTaskComment';
import CreateNotificaion from './Frontend/Create/CreateUserNotifications';
import CreateUser from './Frontend/Create/CreateUserPage';
import CreateWorkflow from './Frontend/Create/CreateWorkflow';
import CreateWorkFlowDefintion from './Frontend/Create/CreateWorkflowDefinition';

import ReadWorkflow from './Frontend/Read/ReadWorkflow';
import ReadOrderPage from './Frontend/Read/ReadOrderPage';
import ReadTaskComment from './Frontend/Read/ReadTaskComment';
import ReadUserByOrg from './Frontend/Read/ReadUserByOrg';
import ReadUserNotifications from './Frontend/Read/ReadUserNotifications';
import ReadOrderTaskPage from './Frontend/Read/ReadOrderTaskPage';

import UpdateWorkFlow from './Frontend/Update/UpdateWorkflow';

import DeleteTaskComment from './Frontend/Delete/DeleteTaskComment';
import DeleteWorkFlow from './Frontend/Delete/DeleteWorkflow';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<CreateUser />} />
        <Route exact path="/listUser" element={<ReadUserByOrg />}></Route>

        <Route exact path="/order" element={<CreateOrder />} />
        <Route exact path="/ReadOrder" element={<ReadOrderPage />} />
        <Route exact path="/ordertask" element={<CreateOrderTask />} />
        <Route exact path="/ReadOrderTaskPage" element={<ReadOrderTaskPage />} />

        <Route exact path="/comments" element={<CreateComments />} />
        <Route exact path="/listcomments" element={<ReadTaskComment />} />
        <Route exact path="/deleteComments" element={<DeleteTaskComment />} />

        <Route exact path="/notification" element={<CreateNotificaion />} />
        <Route exact path="/listNotif" element={<ReadUserNotifications />} />

        <Route exact path="/workflow" element={<CreateWorkflow />} />
        <Route exact path="/workflowdefinition" element={<CreateWorkFlowDefintion />} />
        <Route exact path="/readworkflow" element={<ReadWorkflow />} />
        <Route exact path="/deleteworkflow" element={<DeleteWorkFlow />} />
        <Route exact path="/updateworkflow" element={<UpdateWorkFlow />} />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
