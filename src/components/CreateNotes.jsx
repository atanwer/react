import React from 'react';
import "../css/CreateNotes.css";
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'

const CreateNotes = (props) => {



    return (
        <>
            <div className='createNotes-container'>
                <div className='addNoteBox'>
                    <input
                        type='text'
                        placeholder='Title'
                        name='title'
                        value={props.title}
                        onChange={(e) => {
                            props.passCreateNoteFunc(e);
                        }}

                    />
                    <textarea
                        placeholder='Enter Your Content Here'
                        name='content'
                        value={props.content}
                        onChange={(e) => {
                            props.passCreateNoteFunc(e);
                        }}
                    />
                    <Button className="addBtn" onClick={() =>{
                        props.passAddNoteFunc();
                    }}><AddIcon /></Button>
                </div>
            </div>
        </>
    );
};

export default CreateNotes;