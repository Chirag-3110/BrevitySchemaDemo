import {API} from 'aws-amplify';
import * as queries from '../../../graphql/queries';
const ListWorkflow=async()=>{
    try {
        const WorkFlowRespones=await API.graphql({
            query:queries.listWorkflows,
        })
        return WorkFlowRespones;
    } catch (error) {
        console.log(error);
    }
}
export default ListWorkflow;