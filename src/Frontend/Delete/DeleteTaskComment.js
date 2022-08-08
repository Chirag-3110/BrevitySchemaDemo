import React, { useState } from 'react';

import DeleteComment from '../../Backend/APIS/CommentAPI/DeleteComment';

export default function DeleteTaskComment() {
    const [Id, setId] = useState("")

    const deleteComments = async () => {
        try {
            if (Id === "") {
                alert("Enter ID field")
            }
            else {
                let commentResponse = await DeleteComment(Id);

                if (commentResponse)
                    console.log("Comment deleted")
            }
        } catch (error) {
            console.log({ message: 'Error deleting Comment' });
        }
    };

    return (
        <div className="App">

            <input type="text" placeholder="Enter the id of comment which you want tp delete"
                onChange={(Id) => (setId(Id.target.value))}
            ></input>

            <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={deleteComments}>Delete Comments</button>
        </div>
    );
}