import { Auth } from 'aws-amplify';
const GetAuthedUser=async()=>{
    try {
        let userResponse=await Auth.currentAuthenticatedUser();
        return userResponse;
    } catch (error) {
        console.log(error);
    }
}
export default GetAuthedUser;