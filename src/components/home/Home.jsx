import React from 'react'
import "./home.css";
import HeaderSocials from './HeaderSocials';
import HeroTerminal from './HeroTerminal';
import Reveal from '../common/Reveal';
import Typewriter from '../common/Typewriter';

const Home = () => {
  return (
    <section className="home container" id="home">

      <div className="intro">

        <Reveal as="h5" className="home__hi">
          <span className="wave-emoji" role="img" aria-label="waving hand">👋</span> Hello
        </Reveal>
        <Reveal as="h1" className="home__name" delay={0.1}> My name is Dastan</Reveal>
        <Reveal delay={0.2}>
          <Typewriter
            className="home__role"
            words={["Software Engineer", "Web Developer", "UI/UX Enthusiast"]}
          />
        </Reveal>
        <Reveal as="span" className="home__education" delay={0.25}>I'm creative Software Engineer based in the Woodlands, passionate about building scalable web applications.</Reveal>

        <Reveal delay={0.35}>
          <HeaderSocials />
        </Reveal>

        <Reveal delay={0.4}>
          <a href="#contact" className="btn">Contact Me</a>
        </Reveal>

      </div>

      {/* Terminal replaces the old photo */}
      <Reveal as="div" className="hero-terminal__container" y={0} delay={0.15} duration={0.8}>
        <HeroTerminal />
      </Reveal>

    </section>
  )
}

export default Home
