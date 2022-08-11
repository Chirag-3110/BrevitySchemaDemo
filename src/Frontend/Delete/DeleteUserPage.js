import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteUser from '../../Backend/APIS/SettingOptionAPI/DeleteUser';
function DeleteUserPage() {
    const [email, setEmail] = useState(null)
    return (
        <>
            <h1>DeleteUserPage</h1>
            <TextField style={{ margin: 10, width: 200 }} id="outlined-basic" label="Enter User email to delete" variant="outlined"
                onChange={(email) => setEmail(email.target.value)}
            />
            <Button variant="contained" style={{ margin: "20px" }} onClick={() => DeleteUser(email)}>
                Delete Users
            </Button>
        </>

    )
}

export default DeleteUserPage