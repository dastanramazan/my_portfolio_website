import React from 'react'
import "./home.css";
// import Me from "../../assets/Monogram_Typography Logo.gif";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
// import Shapes from './Shapes';
const Home = () => {
  return (
    <section className="home container" id="home">
      
      <div className="intro">
       
           

        <h5 className="home__hi"><i class="emoji-waving-hand"></i> Hi, I am</h5>
        <h1 className="home__name">DasTaN</h1>
        <span className="home__education">I am a Software Engineer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Contact Me</a>
      
       

        <ScrollDown />
      </div>
              
        
       

            {/* <div className="img__container">
              
              <img src={Me} alt=""  />
            
            </div> */}
      

     
    </section>
  )
}

export default Home