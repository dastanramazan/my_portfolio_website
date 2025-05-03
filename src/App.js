import React from 'react';
import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import AllProjects from './components/allProjects/AllProjects';

const ScrollToAnchor = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const MainContent = () => (
  <>
    <ScrollToAnchor />
    <Home />
    <About />
    <Portfolio />
    <Services />
    <Testimonials />
    <Contact />
  </>
);

const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

