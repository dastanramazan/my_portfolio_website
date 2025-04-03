import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_a9lpv3h',
      'template_gg53xdk',
      form.current,
      '_rog0EzLsh6n5TU3Q'
    ).then(
      () => {
        setSent(true);
        form.current.reset();

        setTimeout(() => setSent(false), 5000);
      },
      () => {
        alert('Something went wrong.');
      }
    );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title_contacts">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about your project!</h3>
        </div>

        {/* Make this container relative for absolute overlay */}
        <div className="form-wrapper">
          <form ref={form} onSubmit={sendEmail} className="action contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input type="text" name="name" className="text contact__form-input" placeholder="Your name" required />
              </div>
              <div className="contact__form-div">
                <input type="email" name="email" className="text contact__form-input" placeholder="Your email" required />
              </div>
            </div>
            <div className="contact__form-div">
              <input type="text" name="subject" className="text contact__form-input" placeholder="Subject" required />
            </div>
            <div className="contact__form-div contact-form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>

          {/* Overlay that appears over form */}
          {sent && (
            <div className="form-overlay">
              <p>✅ Your message has been sent!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
