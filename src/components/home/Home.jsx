import React from 'react'
import "./home.css";
import Me from "../../assets/avatar1.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
// import Shapes from './Shapes';
const Home = () => {
  return (
    <section className="home container" id="home">
      
      <div className="img__container">
         
         <img src={Me} alt="" className="home__img" />
      
      </div>
      
      <div className="intro">
       
        <h5 className="home__hi">Hi, I am</h5>
        <h1 className="home__name">DRinIT</h1>
        <span className="home__education">I am a Front-End Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>
      
      
        <ScrollDown />
      </div>

      

      {/* <Shapes /> */}
    </section>
  )
}

export default Home