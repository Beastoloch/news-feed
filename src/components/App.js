import React, {useEffect, useState} from "react";
import {initialRoutes} from "../utils/initialRoutes";
import {initialCards} from "../utils/initialCards";
import Header from "./landing/Header";
import Nav from "./landing/Nav";
import CardsList from "./landing/CardsList";
import Main from "./landing/News";
import {Route, Routes} from "react-router-dom";
import Register from "./landing/Register";

function App() {



    return (
        <div className="page">
            <Header />
            <Routes>
                <Route path='/*' element={<Main routes={initialRoutes} cards={initialCards} />} />
                <Route path='/sign-up' element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
