import React, { useState } from "react";

const App = () => {
    let [fullName, setfullName] = useState({
        firstName: "",
        lastName: ""
    });

    let onChangeEvent = (e) => {
        setfullName((prevValue) => {
            if (e.target.name === "firstName") {
                return {
                    firstName: e.target.value,
                    lastName: prevValue.lastName
                }
            } else if(e.target.name === "lastName"){
                return {
                    firstName: prevValue.firstName,
                    lastName: e.target.value
                }
            }
        })
    }
    let onSubmit = (e) => {
        e.preventDefault();
        console.log(fullName);
    }

    return (
        <>
            <h2>Hello {fullName.firstName}  {fullName.lastName}</h2>
            <form id="form" onSubmit={onSubmit}>
                <input className="greeting" type='text' onChange={onChangeEvent} placeholder="Enter Your First Name" name="firstName" value={fullName.firstName} ></input>
                <input className="greeting" type='text' placeholder="Enter Your Last Name" onChange={onChangeEvent} name='lastName' value={fullName.lastName}></input>
                <br />
                <button type="submit">Click Me</button>
            </form>
        </>
    );
};

export default App;