import React, { useState } from 'react';
import { API } from 'aws-amplify';

import * as mutations from "../../graphql/mutations";
import ReadTaskComment from '../Read/ReadTaskComment';
import DeleteTaskComment from '../Delete/DeleteTaskComment';

function CreateComments() {

  const [commentPath, setCommentPath] = useState("");
  const [filePath, setFilePath] = useState("");

  const commentDetails = {
    commentPath: commentPath,
    filePath: filePath
  }

  const createComment = async () => {
    const comment = await API.graphql({
      query: mutations.createTaskCommentMapping, variables: { input: commentDetails },
      authMode: 'API_KEY'
    });
    console.log(comment);
    setCommentPath("");
    setFilePath("");
  };
  return (
    <div className="App">
      <h1>Welcome to CommentsPage</h1>

      <div>
        <div style={{ margin: 10}}>
          <label htmlFor="FormControlInput1">Enter Comment Path:</label>
          <input type="text" id="FormControlInput1" placeholder="sample.pdf4522" autoFocus required onChange={(e) => {setCommentPath(e.target.value)}} />
        </div>
        <div style={{ margin: 10}}>
          <label htmlFor="FormControlInput2">Enter File Path:</label>
          <input type="text" id="FormControlInput2" placeholder="sample/pdf12" required onChange={(e) => {setFilePath(e.target.value)}} />
        </div>
      </div>

      <button style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }} onClick={createComment}>Create Comments</button>

      <ReadTaskComment />
      <DeleteTaskComment />

    </div>
  );
}

export default CreateComments;
