import React, { useState } from 'react';

export const ContactForm = (props) => {

    const {initialMessage = {id: null, 
        name: "", 
        email: "",
        subject: "",
        message: ""}} = props;

    const [message, setMessage] = useState(initialMessage);

    // const handleNameChange = (event) => {
    //     const name = event.target.value;
    //     setMessages((messages) => ({ ...messages, message }));
    //   };



    const postMessage = (newMessage) => {
        return fetch("/api/students", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMessage),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("From the post ", data);
            props.saveMessage(data);
          });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        postMessage();
      };



  return (
    <div className='container mt-5'>
        <h2 className='mb-3'>Keep In Touch</h2>
        <form onSubmit={handleSubmit}>
        <fieldset>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input className='form-control' 
                type="text" 
                id="name" 
                value={message.name}
                required />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input className='form-control' 
                type="text" 
                id="email" 
                value={message.email}
                required />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Subject</label>
                <input className='form-control' 
                type="text" 
                id="subject" 
                value={message.subject}
                required />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Message</label>
                <textarea className='form-control' 
                type="text" 
                id="message" 
                value={message.message}
                required />
            </div>
            <button className='btn btn-danger' type='submit'>
                
            </button>
        </fieldset>
        </form>
    </div>
  )
}
export default ContactForm;