import { API } from 'aws-amplify';

import * as queries from '../../../graphql/queries';
import ErrorHandling from '../../ErrorHandling';

const GetWorkFlow = async (workflowid) => {
    try {
        const WorkFlowRespone = await API.graphql({
            query: queries.getWorkflow,
            variables: {
                id: workflowid
            }
        })
        
        return WorkFlowRespone;
    } 
    catch (error) {
        ErrorHandling(error);
    }
}
export default GetWorkFlow;