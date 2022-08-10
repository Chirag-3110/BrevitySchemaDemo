import { API } from 'aws-amplify';

import * as queries from '../../../graphql/queries';
import ErrorHandling from '../../ErrorHandling';

const ListNotif = async () => {
    try {
        const listNotifData = await API.graphql({
            query: queries.listUserNotifications,
            authMode: 'API_KEY'
        });

        return listNotifData;
    } catch (error) {
        ErrorHandling(error, 'Notification');
    }
};

export default ListNotif;