import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

const App = () => {
    const [inputItem, setInputItem] = useState('');
    const [items, setItems] = useState([]);
    const onchangefunction = (e) => {
        setInputItem(e.target.value);
    }
    const addItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputItem]
        })
        setInputItem('')
    }
    const deleteItem = (id) => {
        setItems( items.filter((item,index)=>{
            return index !==id ;
        }))
    }
    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <h1>ToDo's List App</h1>
                    <div className="itemadder">
                        <input type='text' placeholder="Add List Items" onChange={onchangefunction} value={inputItem} ></input>
                        <button onClick={addItems}>+</button>
                    </div>
                    <div className="items">
                        {items.map((item, index) => {
                            return <Item id={index} key={index + 1} text={item} onSelect={deleteItem} />
                        })}

                    </div>
                </div>
            </div>
        </>
    );
};

export default App;