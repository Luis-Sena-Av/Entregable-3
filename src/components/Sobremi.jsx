import React from 'react'

export const Sobremi = ({sectio_activ}) => {

  
  return (

    <div className={`section2  ${sectio_activ[1].value && "mostrar_sec"}`}>
      <h1>About me</h1>
    <div className='sec2'>
            <div  className='sobremi' id="sobremi">
              <b>who I am?</b>
              <p className='text_sobremi'>I am a front end developer for chownow in cordoba/colombia. I have serious passion for ui effects animations and creating intuitive, dinamic user experiences.  </p>
              <div></div>
            </div> 
            <div className="skils">

              <div className="item">
                <p className='item_skills'><i className='bx bxl-html5' style={{color:"#E34E24"}} ></i><span>Html</span></p>
                <div className="item">
                  <div className="skill_bar"><div className={`${sectio_activ[1].value &&"anima skill_bar-70"} skill_bar-fill`}></div></div>                  
                  <span>70%</span>
                </div>
                
              </div> 

              <div className="item">
                <p className='item_skills'><i className='bx bxl-css3' style={{color:"#1471B6"}}></i><span>Css</span></p>
                <div className="item">
                <div className="skill_bar"><div className={`${sectio_activ[1].value &&"anima skill_bar-80"} skill_bar-fill`}></div></div> 
                  <span>80%</span>
                </div>
                
              </div>
              <div className="item">
                <p className='item_skills'><i style={{color:"#EED53B"}} className='bx bxl-javascript'></i><span>Javascrip</span></p>
                <div className="item">
                <div className="skill_bar"><div className={`${sectio_activ[1].value &&"anima skill_bar-75"} skill_bar-fill`}></div></div> 
                  <span>75%</span>
                </div>
                
              </div> 
              
              <div className="item">
                <p className='item_skills'><i style={{color:"#00D4F7"}} className='bx bxl-react'></i><span>React</span></p>
                <div className="item">
                <div className="skill_bar"><div className={`${sectio_activ[1].value &&"anima skill_bar-60"} skill_bar-fill`}></div></div> 
                  <span>60%</span>
                </div>
               
              </div>
              
            </div>
        </div>

    </div>
    
  )
}
