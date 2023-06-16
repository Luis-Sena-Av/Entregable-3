import React from 'react'

export const Sobremi = ({sectio_activ}) => {

  
  return (

    <div className={`section2  ${sectio_activ[1].value && "mostrar_sec"}`}>
      <h1>About me</h1>
    <div className='sec2'>
            <div  className='sobremi' id="sobremi">
              <b>who I am?</b>
              <p>I am a front end developer for chownow in cordoba/colombia. I have serious passion for ui effects animations and creating intuitive, dinamic user experiences.</p>
              <div></div>
            </div> 
            <div className="skils">

              <div className="item">
                <p>Html</p>
                <div className="item">
                  <div className="skill_bar"><div className={`${sectio_activ[1].value &&"anima skill_bar-70"} skill_bar-fill`}></div></div>                  
                  <span>70%</span>
                </div>
                
              </div>

              <div className="item">
                <p>Css</p>
                <div className="item">
                <div className="skill_bar"><div className={`${sectio_activ[1].value &&"anima skill_bar-80"} skill_bar-fill`}></div></div> 
                  <span>80%</span>
                </div>
                
              </div>
              <div className="item">
                <p>Javascrip</p>
                <div className="item">
                <div className="skill_bar"><div className={`${sectio_activ[1].value &&"anima skill_bar-75"} skill_bar-fill`}></div></div> 
                  <span>75%</span>
                </div>
                
              </div>
              
              <div className="item">
                <p>React</p>
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
