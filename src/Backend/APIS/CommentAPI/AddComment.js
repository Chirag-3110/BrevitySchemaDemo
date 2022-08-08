import { API } from 'aws-amplify';

import * as mutations from '../../../graphql/mutations';
import ErrorHandling from '../../ErrorHandling';

const AddComment = async (commentPath, filePath) => {
    try {
        const commentDetails = {
            commentPath: commentPath,
            filePath: filePath
        }
        
        const comment = await API.graphql({
            query: mutations.createTaskCommentMapping, 
            authMode: 'API_KEY',
            variables: {
                input: commentDetails 
            }
        });
        
        return comment;
    } catch (error) {
        ErrorHandling(error, 'Comment');
    }
}
export default AddComment;