import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
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
    ).then(() => {
      setSent(true);
      form.current.reset();

      // Optional: Auto hide after 5s
      // setTimeout(() => setSent(false), 10000);
    });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title_contacts">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about your project!</h3>
        </div>

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

          {/* Animated Overlay with Dismiss Button */}
          <AnimatePresence>
            {sent && (
              <motion.div
                className="form-overlay"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4 }}
              >
                <button className="close-overlay" onClick={() => setSent(false)}>×</button>
                {/* ✅ SVG Checkmark Animation */}
                    <motion.svg
                      className="checkmark-svg"
                      width="80"
                      height="80"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.circle
                        cx="26"
                        cy="26"
                        r="25"
                        stroke="#00ff9d"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M14 27L22 35L38 19"
                        stroke="#00ff9d"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                      />
                    </motion.svg>

                
                <p>Your message has been sent!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
