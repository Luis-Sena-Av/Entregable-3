import React from 'react'
export const Header = ({setsectio_activ,sectio_activ,menuShow,setmenuShow}) => {
   

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

    const handleMenu=()=>{
      setmenuShow(!menuShow)
      
    }

    const handlehome=()=>{
      setsectio_activ([{id:1,value:true},{id:2,value:false},{id:3,value:false},{id:4,value:false}])
      console.log("first")
    }
   
    return (
        <>
          <header>
            
            <a onClick={handlehome} className='logo'><div className='nombre'>Luis Seña Áv.</div> <div className='img_logo'><img src="../imagenes/Yo1.png" alt="mi-logo" /></div> </a>
            
            <div className='conten-nav'>

              <nav className={`navega ${menuShow&&'mostrar_menu'}`}>
                <ul onClick={handleClic}>                
                  <li id='1' className={sectio_activ[0].value && "color-activ"} >Home</li>
                  <li id='2' className={sectio_activ[1].value && "color-activ"} >About</li>
                  <li id='3' className={sectio_activ[2].value && "color-activ"} >Briefcase</li>
                  <li id='4' className={sectio_activ[3].value && "color-activ"} >Contac</li>
                </ul>
                <div className='icons_header'>
                <a ><i className='bx bxl-facebook'></i></a>
                <a ><i className='bx bxl-instagram'></i></a>
                <a ><i className='bx bxl-github'></i></a>
                <a target='blank_' href="https://www.linkedin.com/in/luis-se%C3%B1a-%C3%A1vila-07923a278/"><i className='bx bxl-linkedin'></i></a>
              </div>
              </nav>

              <i onClick={handleMenu} className={`bx bx-menu ${menuShow&&'bx-x'}`}></i>


            </div>
            
          </header>
        </>
      )
}
