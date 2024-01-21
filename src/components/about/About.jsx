import React from 'react';
import "./about.css";
import Image from "../../assets/myavatar_1.jpg";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About ME</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
{/* About */}
        <div className="about__data grid">
              <div className="about__info">
                <p className="about__description">Hello, I'm Dastan, a Software Engineer excited about using technology to make the world better. In the past 4 years, I've learned about lots of different technologies, from making websites to working with complex systems. I'm good at finding efficient ways to do things, staying organized, and paying attention to technical details. I enjoy working with teams to create new things that help push technology forward.</p>
                <a href="https://drive.google.com/file/d/1JO5ea-EMcER-OMve2-TcWePBKA38vJx4/view?usp=drive_link" className="btn">Download CV</a>
              </div>
          
{/* 1 part description of SKILLS */}
          {/* <div className="about__skills grid"> */}
            {/* <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar"></div>
              <span className="skills__percentage development"></span>
            </div> */}
          
{/* 2 part description of SKILLS */}
          
            {/* <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar"></div>
              <span className="skills__percentage ui__design"></span>
            </div> */}
          
{/* 3 part description of SKILLS */}
          
            {/* <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar"></div>
              <span className="skills__percentage photography"></span>
            </div> */}
          



          {/* </div>  */}
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About