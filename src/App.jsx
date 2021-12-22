import React, { useState } from "react";
import Header from "./components/Header";
import CreateNotes from "./components/CreateNotes";
import Note from "./components/Note";


const App = () => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const [allNotes, setAllNotes] = useState([])
    const createNotes = (e) => {
        const { name, value } = e.target;
        setNote((oldValue) => {
            return {
                ...oldValue,
                [name]: value
            }
        })
    }
    const addNotes = () => {
        setAllNotes((preValue) => {
            return [...preValue, note]
        })
        setNote({
            title:'',
            content:''
        })
    }
    const deleteNote = (id) => {
        setAllNotes(oldNotes => {
            return oldNotes.filter((notes,index) => index !==id);
        })
    }
    return (
        <>
            <Header />
            <CreateNotes 
            passCreateNoteFunc={createNotes} 
            passAddNoteFunc={addNotes}
            title={note.title}
            content={note.content}
             />
            <div className="note-box">
                {allNotes.map((note, index) => {
                    return <Note key={index} index={index} title={note.title} content={note.content} passDeleteFunc={deleteNote} />
                })}
            </div>
        </>
    );
};

export default App;