import React from 'react'
import Counter from '../common/Counter';
import { StaggerGroup, StaggerItem } from '../common/Stagger';

const AboutBox = () => {
  return (
    <StaggerGroup className="about__boxes grid">

{/* Project completed */}
        <StaggerItem className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <Counter className="about__title" value={15} suffix="+" />
                <span className="about__subtitle">Project completed</span>
            </div>
        </StaggerItem>
{/* Cup of Coffee */}
        <StaggerItem className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <Counter className="about__title" value={5670} />
                <span className="about__subtitle">Cup of Coffee</span>
            </div>
        </StaggerItem>
{/* Satisfied clients */}
        <StaggerItem className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <Counter className="about__title" value={10} suffix="+" />
                <span className="about__subtitle">Satisfied clients </span>
            </div>
        </StaggerItem>

{/* Years of experience */}
        <StaggerItem className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <Counter className="about__title" value={12} suffix="+" />
                <span className="about__subtitle">years of experience</span>
            </div>
        </StaggerItem>

    </StaggerGroup>

  )
}

export default AboutBox
