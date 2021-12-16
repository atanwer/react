import React, { useState } from "react";
import './css/index.css';
const App = ()=> {
    const [time , setdata] = useState(new Date().toLocaleTimeString()) ;
    const GetTime = ()=>{
         setdata(new Date().toLocaleTimeString());
    }
    return (
        <>
            <h1>{time}</h1>
            <button  onClick={GetTime}>Get Time</button>
        </>
    )
};


export default App;