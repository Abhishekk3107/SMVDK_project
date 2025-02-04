import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    alert("Your message has been sent successfully!");
    emailjs.sendForm('service_s5fa1mk', 'template_4odxs6m', form.current, {publicKey: '-hm_Q4r6h-aiL6vie',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
     
      setFormData({
        name:'',
        email:'',
        message:''
    })

    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <header className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Have any queries? We’d love to hear from you!</p>
      </header>

      <section className="contact-info">
        <h2>Temple Address & Helpline</h2>
        <p><strong>Shri Mata Vaishno Devi Shrine</strong></p>
        <p>Katra, Jammu & Kashmir, India</p>
        <p>Helpline: <strong>1800-180-2020</strong></p>
        <p>Email: <strong>support@vaishnodevi.org</strong></p>
      </section>

      <section className="contact-map">
        <h2>Find Us Here</h2>
        <iframe
          title="Vaishno Devi Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1700.9253275564617!2d74.9494961!3d33.0308211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c0c80c09e83b1%3A0x20765e271659f5f8!2sVaishno%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1649146214898!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
       
      </section>

      <section className="contact-social">
      <h2>Follow Us</h2>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="icon twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon instagram" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="icon youtube" />
        </a>
      </div>
    </section>
    </div>
  );
};

export default Contact;