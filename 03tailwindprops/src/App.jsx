import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"aditya",
    id:"1234"
  }
  let newarr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-red-700 p-5 rounded-xl mb-5'>Tailwind Test</h1>
      <Card userName="chaiaurcode" btnText="Clickme"/>
      <Card userName="aditya" />

    </>
  )
}

export default App
