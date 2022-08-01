import React from "react";
import ContactItem from "./ContactItem";

function ContactList({contact}){
    return(
    <div className="contact-list">
        {
            contact.map((contacts)=>(
                <ContactItem key={contacts.id} {...contacts}/>
            ))
        }
    </div>
    );
}
export default ContactList
