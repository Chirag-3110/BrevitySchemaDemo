import ErrorHandling from "../../ErrorHandling";
import { API, Storage } from "aws-amplify";
import * as queries from "../../../graphql/queries"
const ReadFile = async (id) => {
    try {
        const orderfile = await API.graphql({
            query: queries.taskByorderTasksId,
            variables: { orderTasksId: id },
        });
        const filedate = orderfile.data.taskByorderTasksId.items;
        console.log(filedate)
        return filedate;
    }
    catch (error) {
        ErrorHandling(error);
    }
}
export const fetchdata = async (filesData) => {
    try {
        const fileAccessURL = await Storage.get(filesData, {
            level: "public",
            download: false
        });
        console.log(fileAccessURL);
    } catch (error) {
        console.log("error");
    }
}
export default ReadFile;
