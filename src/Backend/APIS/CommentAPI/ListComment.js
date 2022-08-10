import { API } from 'aws-amplify';

import * as queries from '../../../graphql/queries';
import ErrorHandling from '../../ErrorHandling';

const ListComment = async () => {

    try {
        const ListCommentData = await API.graphql({
            query: queries.listTaskCommentMappings,
            authMode: 'API_KEY'
        });
    
        return ListCommentData;
    } catch (error) {
        ErrorHandling(error, 'Comment');
    }
};

export default ListComment;