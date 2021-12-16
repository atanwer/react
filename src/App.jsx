import React, { useState } from "react";
import './css/index.css';
const App = ()=> {
    const [time , setdata] = useState(new Date().toLocaleTimeString()) ;
        setInterval(()=>{
            setdata(new Date().toLocaleTimeString());
        },1000)
    return (
        <>
            <h1>{time}</h1>
        </>
    )
};


export default App;