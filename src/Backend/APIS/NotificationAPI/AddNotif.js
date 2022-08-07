import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';

const AddNotif = async (userNotifId, notifContent) => {
    try {
        const notificationDetails = {
            userNotificationsId: userNotifId,
            NotificationStatus: 'UNSEEN',
            NotificationContent: notifContent,
            NotificationTime: "1930-01-01T16:00:00-07:00"
        }
        if (userNotifId == null || notifContent == null)
            console.log("enter all fields")
        const newNotification = await API.graphql({ query: mutations.createUserNotifications, variables: { input: notificationDetails } });

        return newNotification;
    } catch (error) {
        console.log(error);
    }
}
export default AddNotif;