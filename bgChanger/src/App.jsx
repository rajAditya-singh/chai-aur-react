import { useState } from "react"

function App() {
  const [color, setcolor] = useState("Green")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setcolor("red")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "red"}}>Red</button>
          <button onClick={()=>setcolor("white")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "white"}}>white</button>
          <button onClick={()=>setcolor("Brown")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "Brown"}}>Brown</button>
          <button onClick={()=>setcolor("Green")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "Green"}}>Green</button>
          <button onClick={()=>setcolor("Orange")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "Orange"}}>Orange</button>
          <button onClick={()=>setcolor("Black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "black"}}>Black</button>
          
          </div>  
      </div>
    </div>
  )
}

export default App
