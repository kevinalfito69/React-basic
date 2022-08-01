import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
function ContactApp(){
    const contact = getData();
    return(
        <div className="contact-app">
        <h1>Daftar Contact</h1>
        <ContactList contact={contact}/>
        </div>
    )
}
export default ContactApp