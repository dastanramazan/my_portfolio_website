import React from 'react';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.linkedin.com/in/dramazan/" className="home__social-link" target="_blank" rel="noopener noreferrer" > 
            <i class="fab fa-linkedin"></i> 
        </a> 
       
        <a href="https://www.instagram.com/dr_in_it/" className="home__social-link" target="_blank" rel="noopener noreferrer"> 
            <i class="fab fa-instagram"></i>
        </a> 

        <a href="https://github.com/dastanramazan" className="home__social-link" target="_blank" rel="noopener noreferrer"> 
            <i class="fab fa-github"></i>
        </a> 

        {/* X (Twitter) icon as SVG for compatibility */}
        <a href="https://x.com/DastanRamazan" className="home__social-link" target="_blank" rel="noopener noreferrer">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', fontSize: 'inherit', display: 'inline-block'}}>
                <path d="M17.53 3H21.25L13.62 10.87L22.5 21H15.87L10.65 14.67L4.78 21H1.06L9.13 12.56L0.5 3H7.32L12.08 8.76L17.53 3ZM16.32 19.13H18.23L6.78 4.76H4.73L16.32 19.13Z" fill="currentColor"/>
            </svg>
        </a>

    </div>
  )
}

export default HeaderSocials