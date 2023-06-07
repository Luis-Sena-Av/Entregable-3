import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Inicio } from './components/Inicio'
import { Sobremi } from './components/Sobremi'
import { Footer } from './components/footer'

function App() {
  
  const [visible,setvisible]= useState()
  const [links,setlink]= useState()
  const [iconmenu,seticonmenu]= useState()
  const [menu,setmenu]= useState()

  useEffect(()=>{
    const visible=document.querySelectorAll(".hidden");
    const links=document.querySelectorAll(".link")
    const iconmenu=document.querySelector(".icon-menu")
    const menu=document.querySelector("nav")
    setvisible(visible)
    setlink(links)
    setmenu(menu)
    seticonmenu(iconmenu)

  },[])

  console.log(visible)
  
  let observer = new IntersectionObserver(entry=>{
    if (entry[0].isIntersecting) {
              
      entry[0].target.classList.add("show")

      links.forEach((element)=>{
        const href=element.getAttribute("href").split("#")[1]
        const id=entry[0].target.id
        if(id===href){
          element.classList.add("link-activ")
        }else{
          element.classList.remove("link-activ")
        }
    })

    }else{
      entry[0].target.classList.remove("show")
    }
  
  }, {threshold: 0.5});


  if(visible){
    visible.forEach(element=>observer.observe(element)) 
  }

  if(iconmenu&&menu){
     
    iconmenu.addEventListener('click',()=>{
      if(menu.classList.toggle("show-menu")){
          iconmenu.classList.add("bx-x")
      }else{
          iconmenu.classList.remove("bx-x")
      }
      
    })
  
    menu.addEventListener("click",(e)=>{
      if(e.target.classList.contains("link")){
          iconmenu.classList.remove("bx-x")
          menu.classList.toggle("show-menu")
  
    }
    })


  }

  
  
  
  
  return (
    <>
      <Header/>
      <Inicio/>
      <Sobremi/>
      <i className='bx bx-menu icon-menu'></i>
      <Footer/>
    </>
  )
}

export default App
