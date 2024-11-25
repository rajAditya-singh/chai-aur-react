import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [Counter, setCounter] = useState(5)

    // let Counter = 5;

    const addValue = function(){
      // Counter = Counter + 1
      if(Counter >=20){
        stop;
        alert("RESET")
        setCounter(Counter = 5)
      }
      else{
        setCounter(Counter+1)
       
        // setCounter((prevCounter)=> prevCounter+1)
        
        // setCounter((prevCounter)=> prevCounter+1)
        
        // setCounter((prevCounter)=> prevCounter+1)
    
        // setCounter((prevCounter)=> prevCounter+1)
      }
    }

    const SubValue = function(){
      // setCounter(Counter-1)
      if (Counter <= 0){
        stop();
        alert("RESET")
        setCounter(Counter = 5)
      }
      else{
        setCounter(Counter-1)
      }
    }
  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter Value : {Counter}</h2>
      <button
      onClick={addValue}
      >Add Vlaue</button>
      <br />
      <button 
      onClick={SubValue}
      >Substract Value</button>
    </>
  )
}

export default App
