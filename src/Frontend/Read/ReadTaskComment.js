import React from 'react';
import { API } from 'aws-amplify';
import ListComment from '../../Backend/APIS/CommentAPI/ListComment';
export default function ReadTaskComment() {
    const listComments = async () => {
        try {
            const ListAllComment = await ListComment();
            if (ListAllComment) {
                alert("List is fetched");
                console.log(ListAllComment);
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="App">
            <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={listComments}>list Comments</button>
        </div>
    );
}