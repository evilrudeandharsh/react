import { useState } from 'react'

function App() {
  
  const [color,setColor]= useState("olive")

  return (
    <div className="container" style={{ backgroundColor: color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      
      <div className="buttons">
        <button className="button red" onClick={() => setColor("red")}>Red</button>
        <button className="button blue" onClick={() => setColor("blue")}>Blue</button>
        <button className="button green" onClick={() => setColor("green")}>Green</button>
        <button className="button yellow" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="button purple" onClick={() => setColor("purple")}>Purple</button>
        <button className="button olive" onClick={() => setColor("olive")}>Olive</button>
      </div>
      

    </div>
  )
}

export default App
