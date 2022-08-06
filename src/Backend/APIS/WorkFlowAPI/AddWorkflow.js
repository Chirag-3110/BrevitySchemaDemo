import {API} from 'aws-amplify';
import * as muataions from '../../../graphql/mutations';
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
            throw "Enter all fileds";
        const WorkFLowResponse=await API.graphql({
            query:muataions.createWorkflow,
            variables: {input: workflowInput},
        });
        // console.log(workflowInput)
        return WorkFLowResponse;
    } catch (error) {
        console.log(error);
    }
}
export default AddWorkflow;