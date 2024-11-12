import React from 'react'
import emailjs from "@emailjs/browser"
import "./contact.css"
import { useRef } from "react"

const Contact = () => {

  const form = useRef();

  const checkEmail = (e) => {
    e.preventDefault();
    const isFormValid = document.getElementById("form").checkValidity();
    if(!isFormValid) {
      window.alert("please fill in empty fields")
    } else {
      sendEmail(e)
    }
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_sbhmwqm', 'template_7z7bdvc', form.current, {
        publicKey: 'SYDhEL6KetlGMMatq',
      })
      .then(
        () => {
          window.alert("Your Email as been sent successfully");
        },
        (error) => {
          window.alert('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className='contact-me'>
      <div className="container">
        <h1 className="title">Contact</h1>
        <form  className="contact-info" ref={form} id='form' onSubmit={checkEmail}>
            <label for="name" className='label'>Name:</label>
            <input type='text' className='input' id='name' name='name'  required placeholder='Please enter your Full name'/>
            <label for="email" className='label'>Email:</label>
            <input type='email' className='input' id='email' name='email'  required placeholder='Please enter your Email'/>
            <label className='label'>Subject:</label>
            <input type='text' required id='subject' className='input' name='subject' placeholder='Subject of Contacting'/>
            <label className='label'>Message:</label>
            <textarea className='input' required placeholder='Please state your purpose for emailing' name='message'></textarea>
            <button id='submit' value="Send" type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
