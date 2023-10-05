import React,  { useRef } from 'react'
import './contact.css'
import TD from "../../assets/td.png"
import Mattamy from "../../assets/mattamy.jpg"
import Mohawk from "../../assets/mohawk.png"
import FDM from "../../assets/fdm.png"
import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import YoutubeIcon from "../../assets/youtube.png"
import InstagramIcon from "../../assets/instagram.png"
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o98wgmu', 'template_vam59c8', form.current, 'CTl42rqJ9mh3g5pUm')
          .then((result) => {
              console.log(result.text);
              alert('Email Sent');
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <section className="contactPage">
        <div className="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I've had the opportunity to work at a diverse group of companies.
                Some of these companies include:
            </p>
        </div>
        <div className="contact">
            <img src={TD} alt="Client" className="clientImg" />
            <img src= {Mattamy} alt="Client" className="clientImg" />
            <img src= {Mohawk} alt="Client" className="clientImg" />
            <img src= {FDM} alt="Client" className="clientImg" />
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="user_name"/>
                <input type="email" className="email" placeholder="Your Email" name="user_email"/>
                <textarea className='msg' name="message"rows="5"placeholder="Your Message"></textarea>
                <button type='submit' value="Send" className='submitBtn'>Submit</button>
                <div>
                    <img src={FacebookIcon} alt="Facebook" className="link"/>
                    <img src={TwitterIcon} alt="Twitter" className="link"/>
                    <img src={YoutubeIcon} alt="Youtube" className="link"/>
                    <img src={InstagramIcon} alt="Instagram" className="link"/>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact