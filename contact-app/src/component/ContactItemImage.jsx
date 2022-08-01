import React from "react";

function ContactItemImage({imageUrl}){
    return(
        <div className="contect-item__image">
            <img src={imageUrl} alt="contact avatar" />
        </div>
    );
}

export default ContactItemImage