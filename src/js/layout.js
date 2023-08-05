import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCotact from "./AddContact.jsx"
import ContactList from "./ContactList.jsx";
import ContactContext from  "./appContext.js";

const App = () => {
    
    return (
        //luego le pasamos el contextValue de la linea 32 como prop al value del Provider
        
        <ContactContext>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddContact />}></Route>
                <Route path="/contactList" element={<ContactList/>}></Route>
            </Routes>

            </BrowserRouter>
        </ContactContext>
    );
};

export default App;
