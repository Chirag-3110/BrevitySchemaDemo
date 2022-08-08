import { API } from 'aws-amplify';

import * as muataions from '../../../graphql/mutations';
import ErrorHandling from '../../ErrorHandling';

const AddWorkflow = async (WorkFlowName, WorkFlowDesc, UserMail, workFlowJson, saveAsDraft) => {
    try {
        let workflowInput = {
            workflowname: WorkFlowName,
            WorkFlowJSON: workFlowJson,
            WorkFlowDescription: WorkFlowDesc,
            SaveAsDraft: saveAsDraft,
            userOrganizationWorkFlowId: UserMail
        }

        const WorkFlowResponse = await API.graphql({
            query: muataions.createWorkflow,
            authMode: 'API_KEY',
            variables: {
                input: workflowInput
            },
        });

        return WorkFlowResponse;
    }
    catch (error) {
        ErrorHandling(error, "Workflow");
    }
}
export default AddWorkflow;