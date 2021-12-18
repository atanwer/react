import React from "react";
import { useState } from "react/cjs/react.development";

const App = () => {
    let [value, setValue] = useState(0);
    const increaseValue = () => {
        setValue(value++);
    }
    const decreaseValue = () => {
        setValue((preValue) => {
            if (preValue === 0) {
                alert('minimun value is 0');
                return 0;
            } else {
                return preValue - 1;
            }
        })
    }
    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <h1>{value}</h1>
                    <div className="button-container">
                        <button className="incbutton" onClick={increaseValue}>Increase</button>
                        <button className="decbutton" onClick={decreaseValue}>Decrease</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;