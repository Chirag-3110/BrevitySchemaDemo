import ErrorHandling from "../../ErrorHandling";
import { API } from "aws-amplify";
import * as mutations from "../../../graphql/mutations"
const DeleteFile = async (value) => {
    try {
        const orderFileData = await API.graphql({
            query: mutations.deleteOrderTask,
            variables: {
                input: { id: value },
            },
        });
        console.log(orderFileData);
    } catch (error) {
        ErrorHandling(error);
    }
};


export default DeleteFile