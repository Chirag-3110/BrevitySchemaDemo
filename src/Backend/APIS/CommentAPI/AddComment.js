import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
const AddComment = async (commentPath, filePath) => {
    try {
        const commentDetails = {
            commentPath: commentPath,
            filePath: filePath
        }
        if (commentPath == null || filePath == null)
            console.log("enter all fields")
        const comment = await API.graphql({
            query: mutations.createTaskCommentMapping, variables: { input: commentDetails },
            authMode: 'API_KEY'
        });
        console.log(comment)

        return comment;
    } catch (error) {
        console.log(error);
    }
}
export default AddComment;