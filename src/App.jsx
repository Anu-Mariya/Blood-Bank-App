import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDoner from './components/AddDoner'
import ViewAllDoner from './components/ViewAllDoner'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddDoner/>} />
      <Route path="/view" element={<ViewAllDoner />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
