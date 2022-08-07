import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
const ListNotif = async () => {
    const listNotifData = await API.graphql({
        query: queries.listUserNotifications,
        authMode: 'API_KEY'
    });
    return listNotifData;
};
export default ListNotif;