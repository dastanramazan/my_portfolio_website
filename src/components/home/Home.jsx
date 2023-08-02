import React from 'react'
import "./home.css";
import Me from "../../assets/programming.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
// import Shapes from './Shapes';
const Home = () => {
  return (
    <section className="home container" id="home">
      
      <div className="intro">
       
        <h5 className="home__hi"><i class="emoji-waving-hand"></i> Hi, I am</h5>
        <h1 className="home__name">DOS-DEV</h1>
        <span className="home__education">I am a Front-End Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>
      
      
        <ScrollDown />
      </div>
              
        
       

      <div className="img__container">
         
         <img src={Me} alt=""  />
      
      </div>
      

      {/* <Shapes /> */}
    </section>
  )
}

export default Home