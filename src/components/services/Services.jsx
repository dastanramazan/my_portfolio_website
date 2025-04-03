import React from 'react';
import "./services.css";
import Asset17 from '../../assets/Asset_17.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPalette, faPenNib, faCogs, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const data = [
  { 
    id: 1, 
    icon: faLaptopCode, 
    title: "Web Development", 
    description: "Building fast, responsive, and scalable websites tailored to your needs." 
  },
  { 
    id: 2, 
    icon: faPalette, 
    title: "Web Design", 
    description: "Creating visually stunning and user-friendly website designs." 
  },
  { 
    id: 3, 
    icon: faPenNib, 
    title: "UI/UX Design", 
    description: "Enhancing user experience through intuitive and engaging interfaces." 
  },
  { 
    id: 4, 
    icon: faCogs, 
    title: "Maintenance & Support", 
    description: "Providing ongoing updates, bug fixes, and performance optimizations."  
  },
  { 
    id: 5, 
    icon: faShoppingCart, 
    title: "E-commerce Development", 
    description: "Developing robust online stores with secure payment and smooth navigation." 
  },
  { 
    id: 6, 
    image: Asset17, // Adding the image to data structure
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, icon, title, description, image }) => (
          <div
            className="services__card"
            key={id}
            style={id === 6 ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
          >
            <FontAwesomeIcon icon={icon} className="services__icon" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
