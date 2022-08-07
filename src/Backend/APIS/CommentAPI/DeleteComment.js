import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
const DeleteComment = async (CommentPath) => {
    try {
        const inputId = {
            commentPath: CommentPath
        }
        if (CommentPath == null)
            console.log("enter all fields")
        const delComment = await API.graphql({
            query: mutations.deleteTaskCommentMapping,
            variables: { input: inputId },
            authMode: 'API_KEY'
        });
        console.log(delComment)

        return delComment;
    } catch (error) {
        console.log(error);
    }
}
export default DeleteComment;