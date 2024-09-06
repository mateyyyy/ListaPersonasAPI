import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaPersonas from './components/ListaPersonas/ListaPersonas'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ListaPersonas></ListaPersonas>
    </>
  )
}

export default App
