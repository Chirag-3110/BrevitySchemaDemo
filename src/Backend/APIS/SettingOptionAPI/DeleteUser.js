import ErrorHandling from "../../ErrorHandling";
import { API } from "aws-amplify";
import * as mutations from "../../../graphql/mutations"
const DeleteUser = async (value) => {
    try {
        const DeleteUser = await API.graphql({
            query: mutations.deleteUser,
            variables: {
                input: { email: value },
            },
        });
        console.log(DeleteUser);
    } catch (error) {
        ErrorHandling(error);
    }
};


export default DeleteUser