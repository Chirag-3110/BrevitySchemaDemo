import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
const ListComment = async () => {
    const ListCommentData = await API.graphql({
        query: queries.listTaskCommentMappings,
        authMode: 'API_KEY'
    });
    return ListCommentData;
};
export default ListComment;