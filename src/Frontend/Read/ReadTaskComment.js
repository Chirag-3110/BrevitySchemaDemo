import React from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
export default function ReadTaskComment() {
    const listComments = async () => {
        const listComments = await API.graphql({
            query: queries.listTaskCommentMappings,
            authMode: 'API_KEY'
        });
        console.log(listComments);
    };

    return (
        <div className="App">
            <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={listComments}>list Comments</button>
        </div>
    );
}