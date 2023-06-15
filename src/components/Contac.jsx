import React from 'react'

export const Contac = ({sectio_activ}) => {

  return (
    <div className={`contact  ${sectio_activ[3].value && "mostrar_sec"}`}>

        <h2 className='titleCon'>Contact me</h2>

        <form className="form" action="https://formsubmit.co/luchito721@hotmail.com" method="POST">
            <input type="text" placeholder="ingresa tu nombre" name="name" id="nameUser" required />
            <input type="email" placeholder="ingresa tu correo" name="email" id="emailUser" required/>
            <textarea name="comenUser" id="comenuser" cols="30" rows="10" placeholder="Escribeme"></textarea>
            <button type="submit" class="btn">Enviar</button>
            <input type="hidden" name="_captcha" value="false"/>
        </form>

    </div>
  )
}
