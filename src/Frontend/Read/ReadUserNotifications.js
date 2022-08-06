import React from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
export default function ReadUserNotifications() {
    const listNotif = async () => {
        const listNotifData = await API.graphql({
            query: queries.listUserNotifications,
            authMode: 'API_KEY'
        });
        const notifica = listNotifData.data.listUserNotifications.items;
        console.log(notifica);
    };

    return (
        <div className="App">
            <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={listNotif}>list Notification</button>
        </div>
    );
}