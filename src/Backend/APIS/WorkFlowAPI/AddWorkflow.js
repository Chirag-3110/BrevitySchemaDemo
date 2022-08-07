import {API} from 'aws-amplify';
import * as muataions from '../../../graphql/mutations';
import ErrorHandling from '../../ErrorHandling';
const AddWorkflow=async(WorkFlowName,WorkFlowDesc,UserMail,workFlowJson,saveAsDraft)=>{
    try {
        let workflowInput={
            workflowname: WorkFlowName,
            WorkFlowJSON: workFlowJson,
            WorkFlowDescription: WorkFlowDesc,
            SaveAsDraft: saveAsDraft,
            userOrganizationWorkFlowId: UserMail
        }
        if(WorkFlowName==null||WorkFlowDesc==null||UserMail==null)
            throw "Enter all fields";
        const WorkFLowResponse=await API.graphql({
            query:muataions.createWorkflow,
            variables: {input: workflowInput},
        });
        return WorkFLowResponse;
    } catch (error) {
       ErrorHandling(error,"Workflow");
    }
}
export default AddWorkflow;