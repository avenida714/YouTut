import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <div className='Wrapper'>
      <div className='welcome'>
        Welcome to YouTut, a streaming site specialized in online tutorials (Tuts).
      </div>
      <div className='welcome'>
        YouTut is a full stack web application by Alec Venida.
      </div>

    <div className='Footer'>
    <a className="anchor-Icons" href='https://github.com/avenida714'>
    <i className="fa-brands fa-github"></i>
    </a>
    <a className="anchor-Icons" href="https://www.linkedin.com/in/alec-venida-66793979/">
      <i className="fa-brands fa-linkedin-in"></i>
    </a>
  </div>
      <div className='welcome'>
        This site is dedicated to teachers everywhere—thank you for your commitment towards helping others grow.
      </div>
  </div>
  )
}

export default Footer
