import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from "../../graphql/mutations";
import ReadTaskComment from '../Read/ReadTaskComment';
import DeleteTaskComment from '../Delete/DeleteTaskComment';
function CreateComments() {
  const commentDetails = {
    commentPath: "sample.pdf4522",
    filePath: "sample/pdf12"
  }

  const createComment = async () => {
    const comment = await API.graphql({
      query: mutations.createTaskCommentMapping, variables: { input: commentDetails },
      authMode: 'API_KEY'
    });
    console.log(comment)
  };
  return (
    <div className="App">
      <h1>Welcome to CommentsPage</h1>
      <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={createComment}>Create Comments</button>
      <ReadTaskComment />
      <DeleteTaskComment />
    </div>
  );
}

export default CreateComments;
