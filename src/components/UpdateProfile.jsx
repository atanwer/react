import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router'
import { TextField, Typography, Box, makeStyles, Grid, Button } from "@material-ui/core";
import axios from "axios";
const useStyle = makeStyles({
    header: {
        color: 'white',
        background: "green",
        padding: '4px',
        borderRadius: '5px'
    },
    contaniner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px"
    }
})
const UpdateProfile = () => {
    const [student, setStudent] = useState({
        firstname: "",
        lastname: "",
        email: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();
    const classes = useStyle();
    const inputEvent = (e) => {
        setStudent((oldData) => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        })
    }
    const updateStudent = async () => {
        await axios.put(`http://localhost:3000/students/${id}`, student);
        navigate('/');
    }
    useEffect(() => {
        const getCurrentData = async () => {
            const result = await axios(`http://localhost:3000/students/${id}`)
            const studentCurrentData = result.data;
            setStudent(studentCurrentData);
        }
        getCurrentData();
    }, [id])
    return (
        <>
            <Box className={classes.contaniner}>

                <Grid item md={4} >
                    <Box>
                        <Box>
                            <Typography variant='h5' align='center' className={classes.header} >Edit Student Profile </Typography>
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
                            <Button variant="contained" color="secondary" onClick={updateStudent} fullWidth>Update</Button>
                        </Box>

                    </Box>
                </Grid>
            </Box>

        </>
    );
};

export default UpdateProfile;