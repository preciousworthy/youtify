import React, { useState } from 'react';

export const ContactForm = (props) => {

    const {initialMessage = {id: null, 
        name: "", 
        email: "",
        subject: "",
        message: ""}} = props;

    const [messages, setMessages] = useState(initialMessage);

    const handleNameChange = (event) => {
      const name = event.target.value;
      setMessages((messages) => ({ ...messages, name }));
    };

    const handleEmailChange = (event) => {
      const email = event.target.value;
      setMessages((messages) => ({ ...messages, email }));
    };

    const handleSubjectChange = (event) => {
      const subject = event.target.value;
      setMessages((messages) => ({ ...messages, subject }));
    };

    const handleMessageChange = (event) => {
      const message = event.target.value;
      setMessages((messages) => ({ ...messages, message }));
    };



    const postMessage = (newMessages) => {
        return fetch("http://localhost:8080/api/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMessages),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("From the post ", data);
            props.saveMessages(data);
          });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        postMessage(messages);
      };



  return (
    <div className=''>
        <h2 className='mb-3'>Keep In Touch</h2>
        <form onSubmit={handleSubmit}>
        <fieldset className='form-group'>
            <div className='mb-3'>
                <label className='form-label m-1'>Name</label>
                <input className='form-control-sm' 
                type="text" 
                id="name" 
                onChange={handleNameChange}
                value={messages.name}
                required />
            </div>
            <div className='mb-3'>
                <label className='form-label m-1'>Email</label>
                <input className='form-control-sm' 
                type="text" 
                id="email" 
                value={messages.email}
                onChange={handleEmailChange}
                required />
            </div>
            <div className='mb-3'>
                <label className='form-label m-1'>Subject</label>
                <input className='form-control-sm' 
                type="text" 
                id="subject" 
                value={messages.subject}
                onChange={handleSubjectChange}
                required />
            </div>
            <div className='mb-3'>
                <label className='form-label m-1'>Message</label>
                <textarea className='form-control-sm' 
                type="text" 
                id="message" 
                onChange={handleMessageChange}
                value={messages.message}
                required />
            </div>
            <button className='btn btn-danger mb-3' type='submit'>Submit</button>
        </fieldset>
        </form>
    </div>
  )
}
export default ContactForm;