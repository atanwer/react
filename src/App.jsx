import React from "react";
import { useState } from "react/cjs/react.development";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
                        <Tooltip title="Increase value">
                            <Button variant="contained" className="incbutton" onClick={increaseValue}><AddIcon /></Button></Tooltip>
                        <Tooltip title="Decrease Value">
                            <Button variant="contained" className="decbutton" onClick={decreaseValue}><RemoveIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;