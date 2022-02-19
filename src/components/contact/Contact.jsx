import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineMail } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'
import './contact.css'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_iec65e9', 'template_tlqgw8p', form.current, 'user_3L50NuwXwVqXldvvWSZVl')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lvadithe@icloud.com</h5>
            <a href='mailto:lvadithe@icloud.com'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Vadith Gomez</h5>
            <a href='https://t.me/VadithG' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Ypur Full Nmae' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='YOUR Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
