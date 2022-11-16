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
    <footer className='container'>
      <div className='fixed-bottom '>
        <ContactForm saveMessage={addMessage} />
      </div>
    </footer>
  )
  }
  export default Footer;
