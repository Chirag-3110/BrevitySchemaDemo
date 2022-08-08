import { API } from 'aws-amplify';

import * as mutations from '../../../graphql/mutations';
import ErrorHandling from '../../ErrorHandling';

const DeleteComment = async (CommentPath) => {
    try {
        const inputId = {
            commentPath: CommentPath
        }

        const delComment = await API.graphql({
            query: mutations.deleteTaskCommentMapping,
            authMode: 'API_KEY',
            variables: {
                input: inputId
            },
        });

        return delComment;
    } catch (error) {
        ErrorHandling(error, "Comment");
    }
}
export default DeleteComment;