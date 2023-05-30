import React from 'react'
import { useEffect, useState } from 'react'
export const Header = () => {
    const [luna, setluna] = useState()
    const [bodyHtml, setbodyHtml] = useState()

    useEffect(()=>{
      const luna= document.querySelector(".bxs-moon")
      const bodyHtml=document.querySelector("body")
      setluna(luna)
      setbodyHtml(bodyHtml)
    },[])
  
    if(luna&&bodyHtml){
      luna.addEventListener('click',()=>{
        luna.classList.toggle("bxs-sun")
        bodyHtml.classList.toggle("dark")
      })
      console.log(bodyHtml);
    }

    return (
        <>
          <header>
            <a className='logo' href="#inicio"><div className='nombre'>Luis Seña Áv.</div> <div className='img_logo'><img src="../imagenes/Yo1.png" alt="mi-logo" /></div> </a>
            <nav>
              <ul>
                <a className="link" href="#inicio">
                  <li>Inicio</li>
                </a>
                <a className="link" href="#sobremi">
                  <li>Sobre mi</li>
                </a>
                <a className='link' href="#portafolio">
                  <li>Portafolio</li>
                </a>
                <a className='link' href="#contactame">
                  <li>Contáctame</li>
                </a>
              </ul>
            </nav>
            <i className='bx bxs-moon'></i>
          </header>
        </>
      )
}
