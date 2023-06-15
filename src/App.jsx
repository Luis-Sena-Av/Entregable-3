import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Inicio } from './components/Inicio'
import { Sobremi } from './components/Sobremi'
import { Foooter } from './components/Foooter'
import { Portafolio } from './components/Portafolio'
import { Contac } from './components/Contac'

function App() {
  const [sectio_activ, setsectio_activ] = useState([{id:1,value:true},{id:2,value:false},{id:3,value:false},{id:4,value:false}])
 
  
  return (
    <div className='contendor'>
      <Header setsectio_activ={setsectio_activ} sectio_activ={sectio_activ}/>
      <Inicio sectio_activ={sectio_activ}/>
      <Sobremi sectio_activ={sectio_activ}/>
      <Portafolio sectio_activ={sectio_activ}/>
      <Contac sectio_activ={sectio_activ} />
      <Foooter/>
    </div>
  )
}

export default App
