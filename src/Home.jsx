import { useState } from 'react'
import './Home.css'
import Formulario from './pages/Formulario'
import TarjetaUsuario from './componentes/TarjetaUsuario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='contenedorPrincipal'>
      <TarjetaUsuario nombre="Emanuel Rojas" />
    </div>
    </>
  )
}

export default App
