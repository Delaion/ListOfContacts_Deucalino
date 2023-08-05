import React, { useContext } from "react";
import { ContactContext } from "../contexts/Context.jsx";
import { useNavigate } from "react-router";

const ContactList = () => {
    const navigate = useNavigate();
    const context = useContext(ContactContext);

    const derivateAddContact= () =>{
        navigate("/");
    };
    const deleteInContactList = (index) => {
        context.deleteContact(index)
    };
    const editInContactList = (index) => {
        context.handleEditContact(index)
        navigate("/");
    };
     return (
        <div className="m-3 bg-dark">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={() => derivateAddContact()}
          >
            To +<i class="fa-solid fa-address-book"></i>
          </button>
        </div>
        {context.contactPlural.map((contact, index) => {
          return (
            <div className="card w-75 m-auto my-5 d-flex flex-row">
              <div className="m-4">
                <img
                  src={contact.img}
                  className="rounded-circle"
                  alt="..."
                />
              </div>
              <div className="align-self-center m-4">
                <p className="fs-5">{contact.FirstName} {contact.LastName}</p>
                <div className="d-flex gap-2"> <i class="fa-solid fa-location-dot"></i><p>{contact.address}</p></div>
                <div className="d-flex gap-2"> <i class="fa-solid fa-mobile-retro"></i><p>{contact.phone}</p></div>
                <div className="d-flex gap-2"> <i class="fa-solid fa-paper-plane"></i><p>{contact.email}</p></div>
              </div>
              <div className="d-flex ms-auto p-4">
                <div className="m-3">
                  <i className="fas fa-pencil-alt" onClick={() => editInContactList(index)}></i>
                </div>
                <div className="m-3">
                  <i className="fas fa-trash-alt" onClick={() => deleteInContactList(index)}></i>  
                  {/* el index sale de la linea 54 hasta la linea 15. Lo recibo en la linea 15 y luego se lo paso a la linea 16. */}
                </div>
              </div>
            </div>
          );
        })};
        
      </div>
    );
  };
  
  export default ContactList;
  
     