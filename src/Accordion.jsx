import React, { useState } from "react";
import './Accordion.css';
import Button from "@material-ui/core/Button"
const Accordion = ({question,answer}) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="question-box">
                <Button variant="contained" onClick={() => setShow(!show)}>{show ? '➖' : '➕'}</Button>
                <h3>{question} </h3>
            </div>
            {show && <p>{answer}</p>}
        </>
    );
};

export default Accordion;