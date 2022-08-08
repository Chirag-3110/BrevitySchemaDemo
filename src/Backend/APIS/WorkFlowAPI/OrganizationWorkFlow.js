import { API } from 'aws-amplify';

import workflowByOrganization from '../../../graphql/SpecialWorkFlow';
import ErrorHandling from '../../ErrorHandling';

const OrganizationWorkflow = async (OrganizationName) => {
    try {
        const WorkFlowRespones = await API.graphql({
            query: workflowByOrganization,
            variables: {
                organization: OrganizationName
            }
        })
        return WorkFlowRespones;
    } 
    catch (error) {
        ErrorHandling(error);
    }
}

export default OrganizationWorkflow;