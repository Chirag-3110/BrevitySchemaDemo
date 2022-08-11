import React from 'react';
import { Link } from "react-router-dom";
import {Auth} from 'aws-amplify'
function Home() {
    return (
        <div className="App">
            <h1>Welcome to Home</h1>
            <div style={{ width: '50%', height: '40%', display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
                <button
                    style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }}>
                    <Link to="/user" style={{ textDecoration: 'none', color: "black" }}>User Part</Link>
                </button>
                <button
                    style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }}>
                    <Link to="/order" style={{ textDecoration: 'none', color: "black" }}>Order Part</Link>
                </button>
                <button
                    style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }}>
                    <Link to="/ordertask" style={{ textDecoration: 'none', color: "black" }}>Order Task Part</Link>
                </button>
                <button
                    style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }}>
                    <Link to="/notification" style={{ textDecoration: 'none', color: "black" }}>Notification Part</Link>
                </button>
                <button
                    style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }}>
                    <Link to="/comments" style={{ textDecoration: 'none', color: "black" }}>Comment Part</Link>
                </button>
                <button
                    style={{ margin: 10, width: 200, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }}>
                    <Link to="/workflow" style={{ textDecoration: 'none', color: "black" }}>Workflow Part</Link>
                </button>
                <button
                    style={{ margin: 10, width: 400, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }}>
                    <Link to="/workflowdefinition" style={{ textDecoration: 'none', color: "black" }}>WorkflowDefinition Part</Link>
                </button>
                <button
                    style={{ margin: 10, width: 400, height: 50, backgroundColor: '#2AB2FF', color: 'black', fontWeight: "bold", borderWidth: 2, borderColor: "black", borderRadius: 6 }}>
                    <Link to="/downloadupload" style={{ textDecoration: 'none', color: "black" }}>Download and upload s3</Link>
                </button>
            </div>
        </div>
    );
}

export default Home;
