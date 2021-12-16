import React, { useState } from "react";
import './css/index.css';
const App = ()=> {
    const [count , setdata] = useState(0) ;
    const IncreaseValue = ()=>{
         setdata(count + 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button  onClick={IncreaseValue}>Click Me</button>
        </>
    )
};


export default App;