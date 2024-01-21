import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about your project!</h3>
          <p className="contact__details"> Send me an email 👋</p>
        </div>{/* contact__info"*/}

        <form action="" className="action contact__form">
          <div className="contact__form-group">
{/*NAme*/}
            <div className="contact__form-div">
              <input type="text" className="text contact__form-input" placeholder="Insert your name here" />
            </div>
{/*Email*/}
            <div className="contact__form-div">
              <input type="email" className="text contact__form-input" placeholder="Insert your email here" />
            </div>
          </div>
{/*Subject */}
          <div className="contact__form-div">
              <input type="" className="text contact__form-input" placeholder="Insert your subject here" />
            </div>
{/*Message*/}
            <div className="contact__form-div contact-form-area">
              <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="10" 
              className='contact__form-input' 
              placeholder='Write your message here'
              ></textarea>
            </div>
{/* Button */}
            <button className="btn">Send Message</button>
       
       
        </form>

      </div> {/* contact__container gri*/}
    </section>
  )
}

export default Contact