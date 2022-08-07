import { API } from "aws-amplify";
import * as queries from '../../../graphql/queries';
import GetAuthedUser from "./GetAuthedUser";
import ErrorHandling from "../../ErrorHandling";
const getUser=async()=>{
    try {
        let userMail=await GetAuthedUser();
        const userData=await API.graphql({
            query:queries.getUser,
            // variables:{
            //     email:userMail.attributes.email
            // }
        });
        return userData;
    } catch (error) {
        ErrorHandling(error);
    }
}
export default getUser;