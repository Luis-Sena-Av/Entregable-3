import React, { useEffect,useState } from 'react'

export const Portafolio = ({sectio_activ}) => {

  const [veinte, setveinte] = useState(0)

  const handleCarruselleft=()=>{
    if(veinte!=0){
      let can=veinte;
      can=can+20;
      setveinte(can)
    }    
  }

  const handleCarruselright=()=>{
    if(veinte!=-80){
      let can=veinte;
      can=can-20;
      setveinte(can)
    }
  }

  
    const estilo={
      transform:`translateX(${veinte}%)` 
    }  
    


  return (
    <div className={`portafolio  ${sectio_activ[2].value && "mostrar_sec"}`}>
      <h1>Projects</h1>


    <div className='conten_carrusel'>
      <div className='control_left'><i onClick={handleCarruselleft} className='bx bx-chevron-left' ></i></div>
      <div className='carrusel'>
        <div className='contenedor_img' style={estilo}>            
          <div className='imagen_carr'> 
            <div className='projet_info'>
            A short time ago I developed this e-commerce website. This site aims to provide the user with a pleasant shopping experience since it is very intuitive, dynamic and complete. In it you can add, see the details of the products, see the partial and total cost of the selected products and buy in an easy way. With this I intend to show my skills as a web developer.
                <br /><a  target='_blank' href="https://luissenaav-ecomerce.netlify.app/">visit site <i className='bx bx-link-external'></i></a>
            </div>
            
            <div className='project_img'>
              <img src="\imagenes\ecomerce.png" alt="ecomerce" />
            </div>
          </div>

          <div className='imagen_carr'> 
            <div className='projet_info'>
              In this web application I take advantage of my capabilities in react to provide the user with the experience of consulting the different populations of the animated series rick and morty, as well as their characters and the information of each one of them. The site adapts to the interface of different devices.
              <br /><a  target='_blank' href="https://rickandmorty-luissena.netlify.app/">visit site <i className='bx bx-link-external'></i></a>
            </div>
            <div className='project_img'>
              <img src="\imagenes\rickandmorty.png" alt="rickandmorty" />
            </div>
          </div>

          <div className='imagen_carr'> 
            <div className='projet_info'>
              This application fulfills the function of consulting the weather conditions of different parts of the world in real time, it provides us with information such as temperature, wind speed, pressure and other weather conditions.
              <br /><a  target='_blank' href="https://kathy-clima.netlify.app/">visit site <i className='bx bx-link-external'></i></a>
            </div>
            <div className='project_img'>
            <img src="\imagenes\weater.png" alt="weater" />
            </div>
          </div>

          <div className='imagen_carr'> 
            <div className='projet_info'>
              This application created in react has the purpose of interacting with a user database. The application allows the client to create new users, modify their information and delete them. Part of the user information is displayed on the screen by means of a series of cards. This site creates them in order to improve my skills when interacting with the server.
              <br /><a  target='_blank' href="https://crud-luisena.netlify.app/">visit site <i className='bx bx-link-external'></i></a>
            </div>
            <div className='project_img'>
            <img src="\imagenes\crud.png" alt="weater" />
            </div>
          </div>

          <div className='imagen_carr'> 
            <div className='projet_info'>
              I made this application with the use of the react library, the functionality of this app is to obtain a random phrase from an api and display it on the screen and in turn change the style of the wallpaper. This application perfectly fits the various mobile devices.
              <br /><a  target='_blank' href="https://entregable1academlo.netlify.app/">visit site <i className='bx bx-link-external'></i></a>
            </div>
            <div className='project_img'>
            <img src="\imagenes\galletasfortuna.png" alt="weater" />
            </div>
          </div>

        </div>
      </div>
      <div className='control_right'><i onClick={handleCarruselright} className='bx bxs-chevron-right'></i></div>
    </div>
         
    </div>
  )
}
