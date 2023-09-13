import "./contact.scss" 
// import {useState} from "react"
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


// npm install @emailjs/browser --save

const Contact = () => {

const [message,setMessage] = useState(false)
  /* const handleSubmit = (e)=>{
    e.preventDefault()
    setMessage(true)
  } */

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_quzvufn', 'template_xad8hgo', form.current, 'RIC4x65BxILJraNlf')

 /* for disappearing form */
    e.target.reset()


    /* .then((result) => {
      e.preventDefault()
      setMessage(true)
        console.log(result.text);
        console.log("message sent")
    }, (error) => {
        console.log(error.text);
    });
     */
  };

 
  return (
    <div className="contact" id="contact us">
    
    <div className="left">
    <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt="" />
    </div>
    <div className="right">
      <h2>Contact.</h2>
      {/* <input type="email" placeholder="Email" required/> */}
   {/*    <textarea placeholder="Message" required></textarea> */}
   {/* <input type="submit" value="Send" /> */}

      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Full Name" required/>
      <input type="email" name="email" placeholder="Email Address" required/>

      <textarea name="message" placeholder="Message" required />
      <button type="submit" >Submit</button>
      {setMessage && <span>Thanks, I'll reply ASAP &#128512;  </span> }
 
    </form>
     
    
    
    {/* <script type="text/javascript" src="https//cdn.deliver.net/npm/@emailjs/browser@3dist/email.min.js" ></script>
    <script type="text/javascipt">
      {function() {
        emailjs.init{"user_pd8"}
      }}

      Email Id : {{email_id}}

Message : {{message}}
    </script> */}
    </div>
    </div>
  )
}

export default Contact