import React from 'react'

export const Inicio = ({sectio_activ}) => {
  return (

    <div className={`inicio  ${sectio_activ[0].value && "mostrar_sec"}`}>
      <article className='text_init'>Hi, i'm Luis Seña,<br /> a web application developer.</article>
      <div className='img_inicio'><img  src="../imagenes/luis-s.png" alt="luis-seña" /></div> 
    </div>
  )
}
