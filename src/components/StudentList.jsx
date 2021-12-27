import React, { useEffect, useState } from 'react';
import {  Typography, Box, Grid, makeStyles, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,  } from "@material-ui/core";
import axios from 'axios';
import TableList from './TableList';

const useStyle = makeStyles({
    header: {
        color: 'white',
        background: "green",
        padding: '4px',
        borderRadius: '5px'
    }

})
const StudentList = () => {
    const classes = useStyle();
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const getStudents = async () => {
            const students = await axios('http://localhost:3000/students');
            setStudents(students.data);
        }
        getStudents();
    },[students])
    return (
        <>
            <Grid item md={8} >
                <Box>
                    <Box >
                        <Typography variant='h5' align='center' className={classes.header} >Student List </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>NO.</TableCell>
                                        <TableCell align='center'>FullName</TableCell>
                                        <TableCell align='center'>Email</TableCell>
                                        <TableCell align='center'>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {students.map((item,index) => {
                                        return <TableList key={index} no={index} id={item.id} firstname={item.firstname} lastname={item.lastname} email={item.email}/>
                                    })}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default StudentList;