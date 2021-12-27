import React, { useState } from "react";
import { TextField, Typography, Box, makeStyles, Grid, Button } from "@material-ui/core";
import axios from "axios";
const useStyle = makeStyles({
    header: {
        color: 'white',
        background: "green",
        padding: '4px',
        borderRadius: '5px'
    }
})
const AddStudent = () => {
    const [student, setStudent] = useState({
        firstname: "",
        lastname: "",
        email: ""
    });
    const classes = useStyle();
    const inputEvent = (e) => {
        setStudent((oldData) => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        })
    }
    const addStudent = async () => {

        await axios.post('http://localhost:3000/students', student);
        setStudent({
            firstname: "",
            lastname: "",
            email: ''
        })
    }
    return (
        <>
            <Grid item md={4} >
                <Box>
                    <Box>
                        <Typography variant='h5' align='center' className={classes.header} >Add Student Form </Typography>
                    </Box>
                    <Box pt={4}>
                        <TextField variant='outlined' fullWidth label='Firstname' placeholder='Enter Your First Name' color="secondary" onChange={(e) => {
                            inputEvent(e);
                        }} name="firstname" value={student.firstname} required ></TextField>
                    </Box>
                    <Box pt={4}>
                        <TextField variant='outlined' fullWidth label='Lastname' placeholder='Enter Your Last Name' color="secondary" onChange={(e) => {
                            inputEvent(e);
                        }} name="lastname" value={student.lastname} required></TextField>
                    </Box>
                    <Box pt={4}>
                        <TextField variant='outlined' fullWidth label='Email' placeholder='Enter Your Email' color="secondary" onChange={(e) => {
                            inputEvent(e);
                        }} name="email" value={student.email} required ></TextField>
                    </Box>
                    <Box pt={4}>
                        <Button variant="contained" color="secondary" onClick={addStudent} fullWidth>Add Student</Button>
                    </Box>

                </Box>
            </Grid>
        </>
    );
};

export default AddStudent;