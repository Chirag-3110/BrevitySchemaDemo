import { API } from 'aws-amplify';

import * as queries from '../../../graphql/queries';
import ErrorHandling from '../../ErrorHandling';

const ListUserByOrg = async (organization) => {
    try {
        const usersOftheOrg = await API.graphql({
            query: queries.usersByOrganization,
            authMode: 'API_KEY',
            variables: {    
                organization: organization
            }
        });
        
        const userList = usersOftheOrg.data.usersByOrganization.items;
        const reqUserDetails = userList.map((user) => ({
            Photo: user.imageUrl,
            Name: user.name,
            Email: user.email,
            Designation: user.Designation
        }))

        return reqUserDetails;
    } 
    catch (error) {
        ErrorHandling(error, 'User');
    }
    
};


export default ListUserByOrg;