import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
import React, {createContext, useState} from "react";

export const contactContext= createContext ();

const contactProvider=({children})=>{
	const [contact, setContact]=useState({
		FirstName:"",
		LastName:"",
		email:"",
		phone:"",
		adress:"",
	})
	const [inputContact, setInputContact]=useState([]);
	const [editContact, setEditContact]=useState(null);
	const addContact=(contact)=>{
		if(editContact != null){
			const newContactListEdited=inputContact.filter((contact,index)=> index != editContact)
			setInputContact([... newContactListEdited,contact])
			setEditContact(null) //Stop edditting
			return
		}
		setInputContact ([...inputContact, contact]);
	};
	const changeContext=(e)=>{
		console.log(e.target.name);
		//Actualize the contact:
		setContact ({...contact, [e.target.name]: e.target.value});
	};

    const deleteContact=(index)=>{
		const newContactList=inputContact.filter((contact, i)=> index !==i)
		setInputContact(newContactList)
	};

	const handleEditContact=(index)=>{
		setEditContact(index);
	};
//Object context value:
	const contextValue={
		contact:contact,
		contextFunction:changeContext,
		addContact,
		inputContact,
		deleteContact,
		handleEditContact,
	};
	return (
		<contactContext.Provider value= {contextValue}>
			{children}
		</contactContext.Provider>
	);
};
export default contactProvider;
