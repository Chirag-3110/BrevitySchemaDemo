import {API} from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import ErrorHandling from '../../ErrorHandling';
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
      ErrorHandling(error,"Workflow");
    }
}
export default RemoveWorkFlow;