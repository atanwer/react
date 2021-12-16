import React from "react";
function App() {
    function print(){
        alert("hello  I akalesh tanwer");
    }
    return (
        <>
            <h1>Learning click event.</h1>
            <button  onClick={print}>Click Me</button>
        </>
    )
};


export default App;