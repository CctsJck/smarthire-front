import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { CreateUser } from './components/CreateUser/CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <CreateUser/>
    </>
  )
}

export default App
