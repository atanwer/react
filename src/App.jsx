import React, { useState } from "react";

const App = () => {
    let [firstName, setFirstName] = useState();
    let [secondName, setSecondName] = useState();
    let changeFirstName = (e) => {
        firstName = e.target.value;
    }
    let changeSecondName = (e)=>{
        secondName = e.target.value;

    }
    let onClick = (e) => {
        e.preventDefault();
        setFirstName(firstName);
        setSecondName(secondName);
    }

    return (
        <>
            <h2>Hello {firstName} {secondName}</h2>
            <form id="form" onSubmit={onClick}>
                <input className="greeting" type='text' onChange={changeFirstName} placeholder="Enter Your First Name"></input>
                <input className="greeting" type='text' placeholder="Enter Your Second Name" onChange={changeSecondName}></input>
                <button  >Click Me</button>
            </form>
        </>
    );
};

export default App;