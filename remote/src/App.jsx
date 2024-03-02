import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import Button from './Button'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Remote application</h1>
      <Button />
    </>
  )
}

export default App
