import { useState } from "react"
import React from 'react'
import ContactForm from "./contactform"


export const Footer = () => {

    const [messages, setMessages] = useState([])
    const addMessage = (newMessage) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        setMessages((messages) => [...messages, newMessage]);
      };
    
    
  return (
    <div className='container'>
      <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <ContactForm saveMessage={addMessage} />
      </footer>
    </div>
  )
  }
  export default Footer;
