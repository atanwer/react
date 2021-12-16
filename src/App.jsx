import React, { useState } from "react";

const App = ()=>{
    const [bg,setBg] = useState('red');
    const [text,setText] = useState("CLICK ME");
    const changeBgColor = ()=>{
        setBg('yellow');
        setText('DOUBLE CLICK ME');
    }
    const changeAgain = ()=>{
        setBg('red');
        setText(' CLICK ME');

    }
    return (
        <>
            <button style={{
                backgroundColor : bg
            }} onClick={changeBgColor} onDoubleClick={changeAgain}>{text}</button>
        </>
    );
};

export default App;