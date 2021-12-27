import React from 'react';
import Home from './components/Home';
import View from './components/View';
import UpdateProfile from './components/UpdateProfile';
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>  
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/view/:id' element={<View />} />
                <Route path='/updateProfile/:id' element={<UpdateProfile />} />
            </Routes>
        </>
    );
};

export default App;