import React from "react"
import "./contact.css"
import {MdEmail} from "react-icons/md"
import {GrLinkedinOption} from "react-icons/gr"
import {IoLogoWhatsapp} from "react-icons/io"
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm("service_8tqa7ad", "template_noy3ppp", form.current, "8G9KF2m5x8_fiJU7f")
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //   e.target.reset()
  // };


  return (
    <section id="contact">
      <h5>CONTACT</h5>
      <h2>Écrivez-moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <a href="mailto:pmerlaud007@gmail.com" target="_blank" rel="noopener, noreferrer">
          <article className="contact__option">
            <MdEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>pmerlaud007@gmail.com</h5>
          </article>
        </a>

        <a href="https://www.linkedin.com/in/pierre-merlaud-b09958183/" target="_blank" rel="noopener, noreferrer">
          <article className="contact__option">
            <GrLinkedinOption  className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Pierre Merlaud</h5>           
          </article>
        </a>

        <a href="https://wa.me/33618536017" target="_blank" rel="noopener, noreferrer">
          <article className="contact__option">
            <IoLogoWhatsapp  className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+33618536017</h5>   
          </article>
        </a>
        

        </div>
        {/* END OF CONTACT OPTIONS
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <textarea name="message" rows="10" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact 