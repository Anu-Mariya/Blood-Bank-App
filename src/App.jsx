import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDoner from './components/AddDoner'
import ViewAllDoner from './components/ViewAllDoner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddDoner /> 
    <ViewAllDoner /> 
    </>
  )
}

export default App
