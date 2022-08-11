import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import TreeView from "@mui/lab/TreeView";
// import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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
                console.log(filelist)
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="App" style={{ marginTop: "10%" }}>
                <h1 style={{ marginTop: "20%" }}>Welcome to Read file page</h1>
                <TextField style={{ margin: 20, width: 200 }} id="outlined-basic" label="Enter order id" variant="outlined"
                    onChange={(id) => setId(id.target.value)}
                />
                <Button variant="contained" onClick={file}>readFile</Button>
                {/* {
                filelist.map((filelist1) =>
                    <li>{filelist1.TaskName}</li>,

                    filelist.UserFilePathList.map((item) =>
                        <li style={{ margin: "10px" }}
                            // onClick={() => fetchdata(filelist.filelist1)}

                            key={filelist.id}
                        >{filelist.item}</li>

                    )

                )
            } */}




                <List
                    style={{ color: "black" }}
                    sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
                >
                    {filelist.map((filelist) => (
                        <>
                            {/* <Box style={{ display: "flex", paddingBottom: "0.1px" }}> */}
                            {/* <ListItem
                                key={filelist.TaskName}
                                disableGutters
                                style={{ display: "block", border: "1px solid red" }} */}
                            {/* // onClick={() => deleteItem(filelist)}
                            // > */}
                            <li>{filelist.TaskName}</li>
                            {filelist.UserFilePathList.map((files) => (
                                <ListItem
                                    key={filelist.files}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        width: "100%",
                                        marginLeft: "50%"
                                    }}


                                >

                                    <ListItemText
                                        onClick={() => fetchdata(files)}
                                        primary={files}
                                    />
                                </ListItem>
                            ))}
                            {/* </ListItem> */}
                            {/* </Box> */}
                        </>
                    ))}
                </List>





            </div >
        </>
    );
}


export default ReadOrderTaskPage;
