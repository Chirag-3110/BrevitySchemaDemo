import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import fetchorderfile from '../../Backend/APIS/OrderTaskAPI/ReadFile'
import { fetchdata } from '../../Backend/APIS/OrderTaskAPI/ReadFile'
function ReadOrderTaskPage() {
    const [id, setId] = useState(null)
    const [filelist, setfilelist] = useState([]);
    const file = async () => {
        try {

            const filefetched = await fetchorderfile(id);
            if (filefetched) {
                alert("order file is fecthed")
                console.log(filefetched)
                setfilelist(filefetched);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="App">
            <h1 style={{ marginTop: "60px" }}>Welcome to Read file page</h1>
            <TextField style={{ margin: 20, width: 200 }} id="outlined-basic" label="Enter order id" variant="outlined"
                onChange={(id) => setId(id.target.value)}
            />
            <Button variant="contained" onClick={file}>readFile</Button>
            {
                filelist.map((filelist) =>
                    <li style={{ margin: "10px" }}
                        onClick={() => fetchdata(filelist.UserFilePathList)}

                        key={filelist.id}>{filelist.UserFilePathList}</li>)

            }
        </div>
    );
}

export default ReadOrderTaskPage;
