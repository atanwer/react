import React from "react";
import Accordion from './Accordion'
import { quesAns } from "./AccordionApi";


const App = () => {
    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <h1>Interview questions and answers for ReactJS</h1>
                    {quesAns.map((item) => {
                        return <Accordion className="item" key={item.id} {...item} />
                    })
                    }
                        </div>
            </div>
            </>
            )
};

            export default App;