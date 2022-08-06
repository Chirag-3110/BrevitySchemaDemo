import {API} from 'aws-amplify';
import * as queries from '../../../graphql/queries';
const GetWorkFlow=async(workflowid)=>{
    try {
        const WorkFlowRespone=await API.graphql({
            query:queries.getWorkflow,
            variables:{
                id:workflowid
            }
        })
        return WorkFlowRespone;
    } catch (error) {
        console.log(error);
    }
}
export default GetWorkFlow;