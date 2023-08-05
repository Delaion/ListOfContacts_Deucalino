import React, {useContext,useState} from "react";
import { useNavigate } from "react-router";
import { ContactContext, contactContext } from "../store/appContext.jsx";

const addContact=()=>{
    const navigate=useNavigate();
    const context=useContext(contactContext);
    console.log(context);
    const contact=context.contact;
    const changeHelper=context.contextFunction;
    const derivateContactList=()=>{
        navigate("/contactList");
    };
    const SaveInContactList = () => {
        context.addContact(contact);
        derivateContactList ();
    };

    return (
      <form onChange={(e)=>changeHelper(e)}>
  <div className="mt-3 bg-dark text-light">
         <div className="d-flex justify-content-center">
             <h1><i class="fa-solid fa-id-card">Deucalino´s Contact List 4U.</i></h1>
         </div>
         <div className="d-flex justify-content-center">
             <h3>Please add or update your contact<i class="fa-solid fa-file-contract"></i></h3>
         </div>
         <div className="card mb-3 bg-dark" style="max-width: 540px;">
           <div className="row g-0">
              <div className="col-md-4">
               <img src="..." className="img-fluid rounded-start" value={contact.img} alt="..."/>
            </div>
               <div className="col-md-8">
                 <div className="card-body bg-secondary  bg-opacity-25">
                    <h5 className="card-title">Contact:</h5>
                    <label for="fullname">Full Name</label>
                    <div class="input-group">
                        <input
                        for="FirstName" 
                        type="text" 
                        value={contact.FirstName}
                        onChange={(e)=>changeHelper(e)}
                        aria-label="First name"
                         placeholder="Write your first name." 
                         class="form-control"/>
                        <input
                        for="LastName"
                         type="text"
                         value={contact.LastName}
                         onChange={(e)=>changeHelper(e)}
                         aria-label="Last name"
                        placeholder="Write your last name please." 
                        class="form-control"/>
                    </div>
                    <label for="address"><i class="fa-solid fa-location-dot">Address</i></label>
                       <input
                         type="address"
                         name="address"
                         value={contact.address}
                         onChange={(e)=>changeHelper(e)}
                         className="form-control"
                         placeholder="Your address"
                       />
                    <label for="phone"><i class="fa-solid fa-mobile-retro">Phone</i></label>
                       <input
                         type="number"
                         name="phone"
                         value={contact.phone}
                         onChange={(e)=>changeHelper(e)}
                         className="form-control"
                         placeholder="Type your phone number, please."
                         />
                    <label for="email"><i class="fa-solid fa-paper-plane">Email</i></label>
                      <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={(e)=>changeHelper(e)}
                        className="form-control"
                        placeholder="Type your Email"
                        />               
               </div>
               <div className="text-center"> 
                   <button
                   type="button" 
                   onClick={()=> SaveInContactList()}
                   className= "btn btn-success  btn-sm">
                    +<i class="fa-solid fa-address-book"></i>
                   </button>
               </div>
               <div className="text-center"> 
               <button 
               type="button" 
               onClick={()=>  derivateContactList()}
               className="btn btn-outline-primary btn-sm">
                <i class="fa-solid fa-file-signature">To Contacts</i>
               </button>
           </div>
            </div>
        </div>
       </div>
     </div>
    </form>
     
       );
     };

     export default AddContact;