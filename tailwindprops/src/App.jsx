import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <h1 className="bg-green-400 p-4 mb-4 rounded-xl">Tailwind</h1>
      <Cards username="tailwind" btnText='Click here' />
      <Cards username='Hitesh' btnText='Visit me' />
    </>
  )
}

export default App
