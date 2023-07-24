import React from 'react'


const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        
{/* Project completed */}
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Project completed</span>
            </div>
        </div>
{/* Cup of Coffee */}
        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">5670</h3>
                <span className="about__subtitle">Cup of Coffee</span>
            </div>
        </div>
{/* Satisfied clients */}
        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">427</h3>
                <span className="about__subtitle">Satisfied clients </span>
            </div>
        </div>

{/* Nominees winner */}
        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">35</h3>
                <span className="about__subtitle">Nominees winner</span>
            </div>
        </div>


           

    </div>

  )
}

export default AboutBox