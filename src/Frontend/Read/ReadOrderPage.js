import React from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
export default function ReadOrderPage() {
    const listOrder = async () => {
        const listOrder = await API.graphql({
            query: queries.listOrders,
            authMode: 'API_KEY'
        });
        console.log(listOrder);
    };

    return (
        <div className="App">
            <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={listOrder}>list Order</button>
        </div>
    );
}