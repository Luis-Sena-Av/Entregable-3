import React from 'react'

export const Foooter = () => {



  return (
    <>
      <footer>
      <div className='nav'>
            <ul>
                <a href="#inicio">
                  <li>Inicio</li>
                </a>
                <a  href="#sobremi">
                  <li>Sobre mi</li>
                </a>
                <a  href="#portafolio">
                  <li>Portafolio</li>
                </a>
                <a href="#contactame">
                  <li>Contáctame</li>
                </a>
              </ul>
            </div>
              
       

        <div className='redes'>
            <span>Luis Seña A.</span>
            <div className='icons'>
                <a href="#"><i class='bx bxl-facebook'></i></a>
                <a href="#"><i class='bx bxl-instagram'></i></a>
            </div>
        </div>
        
      </footer>
            
    </>
  )
}
