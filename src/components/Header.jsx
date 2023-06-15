import React from 'react'
export const Header = ({setsectio_activ,sectio_activ}) => {
   

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
   
    return (
        <>
          <header>
            
            <a className='logo'><div className='nombre'>Luis Seña Áv.</div> <div className='img_logo'><img src="../imagenes/Yo1.png" alt="mi-logo" /></div> </a>
            
            <div className='conten-nav'>

              <nav className='navega'>
                <ul onClick={handleClic}>                
                  <li id='1' className={sectio_activ[0].value && "color-activ"} >Home</li>
                  <li id='2' className={sectio_activ[1].value && "color-activ"} >About</li>
                  <li id='3' className={sectio_activ[2].value && "color-activ"} >Briefcase</li>
                  <li id='4' className={sectio_activ[3].value && "color-activ"} >Contac</li>
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
