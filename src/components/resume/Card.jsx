import React from 'react'
import { StaggerItem } from '../common/Stagger';

const Card = (props) => {
  return (
    <StaggerItem className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <p className="timeline__text">{props.desc}</p>

    </StaggerItem>
  );
};

export default Card
