import React from 'react';
import ListNotif from '../../Backend/APIS/NotificationAPI/ListNotif';

export default function ReadUserNotifications() {
    
    const listNotif = async () => {
        try {
            const NotifcationList = await ListNotif();
            if (NotifcationList) {
                alert("List is fetched");
                console.log(NotifcationList);
            }
        } 
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="App">
            <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={listNotif}>list Notification</button>
        </div>
    );
}