import { API } from 'aws-amplify';

import * as queries from '../../../graphql/queries';
import ErrorHandling from '../../ErrorHandling';

const ListWorkflow = async () => {
    try {
        const WorkFlowRespones = await API.graphql({
            query: queries.listWorkflows,
        })

        return WorkFlowRespones;
    } 
    catch (error) {
        ErrorHandling(error);
    }
}
export default ListWorkflow;