import React from "react";
import { Link } from "react-router-dom";
import { TableRow, TableCell, IconButton, Tooltip } from "@material-ui/core";
import { VisibilitySharp, EditSharp, DeleteSharp } from '@material-ui/icons';
import axios from "axios";
const TableList = (props) => {
    const deleteStudent = () => {
        axios.delete(`http://localhost:3000/students/${props.id}`);
    }
    return (
        <>
            <TableRow>
                <TableCell align='center'>{props.no + 1}</TableCell>
                <TableCell align='center'>{props.firstname} {props.lastname}</TableCell>
                <TableCell align='center'>{props.email}</TableCell>
                <TableCell align='center'>
                    <Tooltip title='view' arrow>
                        <IconButton size="small">
                            <Link to={`/view/${props.id}`}><VisibilitySharp color='primary' /></Link>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Edit' arrow>

                        <IconButton size="small">
                            <Link to={`/updateProfile/${props.id}`}><EditSharp /></Link>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='Delete' arrow>
                        <IconButton size="small" onClick={deleteStudent}>
                            <DeleteSharp color='error' />
                        </IconButton>
                    </Tooltip>

                </TableCell>
            </TableRow>
        </>
    );
};

export default TableList;