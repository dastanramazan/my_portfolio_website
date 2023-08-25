import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";


const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "User Experience (UX) and User Interface (UI) design are at the heart of creating products that resonate with users. I offer comprehensive UX/UI design services that blend creativity with user-centric strategies, ensuring your digital solutions are not only visually stunning but also highly functional and intuitive.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Are you looking to establish a strong online presence? I specialize in creating modern, user-friendly websites that engage your audience and achieve your business goals. Whether it's a portfolio, e-commerce platform, or informational site, I'll bring your vision to life with clean code and stunning design.",
  },
  {
    id: 3,
    image: Image3,
    title: "Animation and Data Visualization",
    description:
      "Animation:Elevate digital experiences with captivating motion. Our animation services transform ideas into interactive user journeys that make a lasting impact. Data Visualization: Unlock insights from data with compelling visuals. Our data visualization services present complex information in an understandable format, empowering informed decisions.",
  },
];

const Services = () => {
  return <section className="services container section" id='services'>
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({ id, image, title, description }) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}

    </div>
  </section>
    
  
}

export default Services