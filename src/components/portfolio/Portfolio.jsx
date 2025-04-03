import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [bgColor, setBgColor] = useState("#00D7E1"); // Default background color

  const filterItem = (categoryItem, color) => {
    const updatedItems = Menu.filter((curElem) => curElem.category === categoryItem);
    setItems(updatedItems);
    setBgColor(color); // Change background color based on selection
  };

  return (
    <section className="work container section" id="portfolio" style={{ backgroundColor: bgColor }}>
      <h2 className="section__title">Projects</h2>

      {/* Filter buttons with color change */}
      <div className="work__filters">
        <span className="work__item" onClick={() => { setItems(Menu); setBgColor("#00D7E1"); }}>All</span>
        <span className="work__item" onClick={() => filterItem("Creative", "#ffcccb")}>Creative</span>
        <span className="work__item" onClick={() => filterItem("Design", "#add8e6")}>Design</span>
        <span className="work__item" onClick={() => filterItem("Web Development", "#90ee90")}>Web Development</span>
      </div>

      <div className="work__container grid">
        {items.map(({ id, image, title, category, link }) => (
          <div className="work__card" key={id}>
            <div className="work__thumbnail">
              <img src={image} alt="" className="work__img" />
              <div className="work__mask"></div>
            </div>
            <span className="work__category">{category}</span>
            <h3 className="work__title">{title}</h3>
            <a href={link} className="work__button">
              <i className="icon-link work__button-icon"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
