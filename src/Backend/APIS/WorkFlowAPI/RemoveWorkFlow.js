import {API} from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
const RemoveWorkFlow=async(workflowid)=>{
    try {
        const WorkFlowRespone=await API.graphql({
            query:mutations.deleteWorkflow,
            variables:{
                input:{
                    id:workflowid
                }
            }
        })
        return WorkFlowRespone;
    } catch (error) {
        console.log(error);
    }
}
export default RemoveWorkFlow;