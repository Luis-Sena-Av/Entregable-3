import React from 'react'
import { useEffect, useState } from 'react'
export const Header = ({setsectio_activ,sectio_activ}) => {
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

    const handleClic=(e)=>{
      const s=sectio_activ.map(element=>{
        if(e.target.id==element.id){
          return {id:element.id,value:true}
        }else{
          return {id:element.id,value:false}
        }
      })
      setsectio_activ(s)
    }
    useEffect(()=>{
      console.log(sectio_activ)
    },[sectio_activ])

    return (
        <>
          <header>
            
            <a className='logo' href="#inicio"><div className='nombre'>Luis Seña Áv.</div> <div className='img_logo'><img src="../imagenes/Yo1.png" alt="mi-logo" /></div> </a>
            
            <div className='conten-nav'>

              <nav className='navega'>
                <ul onClick={handleClic}>                
                  <li id='1' className={sectio_activ[0].value && "color-activ"} >Inicio</li>
                  <li id='2' className={sectio_activ[1].value && "color-activ"} >Sobre mi</li>
                  <li id='3' className={sectio_activ[2].value && "color-activ"} >Portafolio</li>
                  <li id='4' className={sectio_activ[3].value && "color-activ"} >Contáctame</li>
                </ul>
                <div className='icons_header'>
                <a href="#"><i className='bx bxl-facebook'></i></a>
                <a href="#"><i className='bx bxl-instagram'></i></a>
                <a href=""><i className='bx bxl-github'></i></a>
                <a href=""><i className='bx bxl-linkedin'></i></a>
              </div>
              </nav>

              <i className='bx bx-menu'></i>


            </div>
            
          </header>
        </>
      )
}
