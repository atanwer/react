import React from "react";
import { Container, makeStyles, Typography, Box, Grid } from "@material-ui/core";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";
const Home = () => {
    const useStyles = makeStyles({
        header: {
            background: 'linear-gradient(45deg,#FE6B8B 30% , #FF8E53 90%)',
            color: 'white',
            padding: 5,
            textTransform: 'uppercase'
        },
        container: {
            width: '100vw',
            padding: 0,
        }
    });
    const classes = useStyles()
    return (
        <>
            <Container className={classes.container} >
                <Box>
                    <Typography
                        variant='h3'
                        align='center'
                        className={classes.header}
                    >Crud Operation in React </Typography>
                </Box>
                <Box p={4}>
                    <Grid container style={{ padding: '10px' }} spacing={4}>
                        <AddStudent />
                        <StudentList />
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Home;