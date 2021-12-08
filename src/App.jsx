import React from "react";
import SlotM from "./Components/SlotM";
function App() {
    return (
        <>
            <h1>🎰 Welcome to <span style={{ color: "red" }}> Slot Machine Game </span> 🎰 </h1>
            <div className="container">
                <div className="slotContainer">
                    <SlotM x="😘" y="😘" z="😘" />
                    <SlotM x="😜" y="😘" z="😘" />
                    <SlotM x="😘" y="😘" z="👀" />
                </div>
            </div>

        </>
    )
};


export default App;