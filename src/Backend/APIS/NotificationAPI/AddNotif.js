import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import ErrorHandling from '../../ErrorHandling';

const AddNotif = async (userNotifId, notifContent) => {
    try {
        const notificationDetails = {
            userNotificationsId: userNotifId,
            NotificationStatus: 'UNSEEN',
            NotificationContent: notifContent,
            NotificationTime: "1930-01-01T16:00:00-07:00"
        }

        const newNotification = await API.graphql({ 
            query: mutations.createUserNotifications,
            authMode: 'API_KEY',
            variables: { 
                input: notificationDetails 
            } 
        });

        return newNotification;
    } catch (error) {
        ErrorHandling(error, 'Notification');
    }
}
export default AddNotif;