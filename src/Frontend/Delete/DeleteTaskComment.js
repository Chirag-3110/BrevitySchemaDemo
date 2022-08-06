import React, { useState } from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
export default function DeleteTaskComment() {
    const [Id, setId] = useState("")
    const inputId = {
        commentPath: Id
    }
    const deleteComments = async () => {
        try {

            const deleteComments = await API.graphql({
                query: mutations.deleteTaskCommentMapping,
                variables: { input: inputId },
                authMode: 'API_KEY'
            });
            console.log(deleteComments)
        } catch (error) {
            console.log("Error is ", error);
        }

    };

    return (
        <div className="App">
            <input type="text" placeholder="Enter the id of comment which you want tp delete"
                onChange={(Id) => (setId(Id.target.value))}
            ></input>
            <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={deleteComments}>delete Comments</button>
        </div>
    );
}