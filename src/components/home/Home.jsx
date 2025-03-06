import React from 'react'
import "./home.css";
import Me from "../../assets/me.webp";
import HeaderSocials from './HeaderSocials';
const Home = () => {
  return (
    <section className="home container" id="home">
      
      <div className="intro">
       
           

        <h5 className="home__hi"><i class="emoji-waving-hand"></i> Hello</h5>
        <h1 className="home__name"> My name is Dastan</h1>
        <span className="home__education">I'm creative Software Engineer based in the Woodlands, passionate about building scalable web applications.</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Contact Me</a>
      
       

      
      </div>
              
        
       

             {/* Image container */}
      <div className="img__container">
        <img src={Me} alt="Dastan" />
      </div>
      

     
    </section>
  )
}

export default Home