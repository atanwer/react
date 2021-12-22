import React from "react";
import "../css/Note.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete'

const Note = (props) => {
    return (
        <>
            <div className="note">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <Button id="deletebtn" onClick={() =>{
                    props.passDeleteFunc(props.index);
                }}>
                    <DeleteIcon />
                </Button>
            </div>
        </>
    );
};

export default Note;