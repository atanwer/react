import React from "react";
import Matched from "./Matched";
import DisMatched from "./DisMatched";


const SlotM = (props) => {
    return (
        <>

            <h1 style={{color:'blue'}}>{props.x} {props.y} {props.z}</h1>
            {((props.x === props.y) && (props.y === props.z)) ? <Matched /> : <DisMatched />}
            <hr/>
        </>
    )
}

export default SlotM;

