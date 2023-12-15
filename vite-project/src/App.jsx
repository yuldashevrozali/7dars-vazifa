import { useState } from 'react'
import Eng from './components/uzb-eng'
import Rus from './components/uzb-rus'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Eng lang = "English" lang2 = "Uzbek"></Eng>
       <Rus />
    </>
  )
}

export default App
