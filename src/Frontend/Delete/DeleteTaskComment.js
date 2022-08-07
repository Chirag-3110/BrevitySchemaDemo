import React, { useState } from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import DeleteComment from '../../Backend/APIS/CommentAPI/DeleteComment';
export default function DeleteTaskComment() {
    const [Id, setId] = useState("")
    const inputId = {
        commentPath: Id
    }
    const deleteComments = async () => {
        try {
            if (Id == null) {
                console.log("enter ID field")
            }
            let commentResponse = await DeleteComment(Id)
            if (commentResponse)
                console.log("Comment deleted")
        } catch (error) {
            console.log({ message: 'Error deleting Comment' });
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