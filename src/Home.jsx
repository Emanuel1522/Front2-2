import { useState } from 'react'
import './Home.css'
import Formulario from './pages/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formulario />
    </>
  )
}

export default App
