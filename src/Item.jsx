import React from "react";

const Item = (props) => {

    return (
        <>
            <div className="item">
                <button onClick={() => {
                    props.onSelect(props.id);
                }}>X</button>
                <h3>{props.text}</h3>
            </div>
        </>
    );
};

export default Item;