import React, { useState } from "react";

const App = () => {
    let [text, setText] = useState();
    let onChange = (e) => {
        text = e.target.value;
    }
    let onClick = () => {
        setText(text);
        document.getElementById('greeting').value = '';
    }

    return (
        <>
            <h2>Hello {text}</h2>
            <div id="form">
                <input id="greeting" type='text' onChange={onChange}></input>
                <button onClick={onClick} >Click Me</button>
            </div>
        </>
    );
};

export default App;