import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../portfolio/Menu';
import '../portfolio/portfolio.css';
import './AllProjects.css';

const AllProjects = () => {
  return (
    <section className="all-projects">
      <Link to="/" className="back-button">
        <i className="icon-arrow-left"></i>
        Back to Home
      </Link>
      <div className="container section">
        <h2 className="section__title">All Projects</h2>

        <div className="work__container grid">
          {Menu.map(({ id, image, title, category, link }) => (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" target="_blank" rel="noopener noreferrer">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;