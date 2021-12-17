import React, { useState } from "react";

const App = () => {
    const [fullName, setfullName] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const onChangeEvent = (e) => {
        setfullName((prevValue) => {
            const {name , value}= e.target;
            return{
                ...prevValue,
                [name]:value,
            }
            // if (name === "firstName") {
            //     return {
            //         firstName: value,
            //         lastName: prevValue.lastName,
            //         email: prevValue.email,
            //         phone: prevValue.phone
            //     }
            // } else if (name === "lastName") {
            //     return {
            //         firstName: prevValue.firstName,
            //         lastName: value,
            //         email: prevValue.email,
            //         phone: prevValue.phone

            //     }
            // } else if (name === "email") {
            //     return {
            //         firstName: prevValue.firstName,
            //         lastName: prevValue.lastName,
            //         email: value,
            //         phone: prevValue.phone

            //     }
            // } else if (name === "phone") {
            //     return {
            //         firstName: prevValue.firstName,
            //         lastName: prevValue.lastName,
            //         email: prevValue.email,
            //         phone: value

            //     }
            // }
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(fullName);
    }

    return (
        <>
            <h2>Hello {fullName.firstName}  {fullName.lastName}</h2>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <form id="form" onSubmit={onSubmit}>
                <input className="greeting" type='text' onChange={onChangeEvent} placeholder="Enter Your First Name" name="firstName" value={fullName.firstName} ></input>
                <input className="greeting" type='text' placeholder="Enter Your Last Name" onChange={onChangeEvent} name='lastName' value={fullName.lastName}></input>
                <input className="greeting" type='email' placeholder="Enter Your Email" onChange={onChangeEvent} name='email'  ></input>
                <input className="greeting" type='number' placeholder="Enter Your Mobile Number" onChange={onChangeEvent} name='phone' ></input>
                <button type="submit">Click Me</button>
            </form>
        </>
    );
};

export default App;