import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Typography, Box, Grid, makeStyles, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Button } from "@material-ui/core";
import axios from 'axios';
import { useParams } from 'react-router-dom';
const useClasses = makeStyles({
    header: {
        background: 'linear-gradient(45deg,#FE6B8B 30% , #FF8E53 90%)',
        color: 'white',
        padding: 5,
        textTransform: 'uppercase'
    }
})

const View = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            const studentdata = await axios(`http://localhost:3000/students/${id}`);
            setStudent(studentdata.data);
        }
        getData();
    }, [id])

    const classes = useClasses();
    return (
        <>
            <Box>
                <Typography
                    variant='h4'
                    align='center'
                    className={classes.header}
                > Student Details </Typography>
            </Box>

            <Grid item md={12} >
                <Box >

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>NO.</TableCell>
                                    <TableCell align='center'>Firstname</TableCell>
                                    <TableCell align='center'>Lastname</TableCell>
                                    <TableCell align='center'>Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>{student.id}</TableCell>
                                    <TableCell align='center'>{student.firstname}</TableCell>
                                    <TableCell align='center'>{student.lastname}</TableCell>
                                    <TableCell align='center'>{student.email}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box align='center' pt={4}>
                    <Button variant="contained" color="secondary" onClick={()=>{navigate('/')}} >Back To Home</Button>
                </Box>
            </Grid>
        </>
    );
};

export default View;