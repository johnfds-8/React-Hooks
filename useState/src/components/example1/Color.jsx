import { useState } from "react"


function Color() {

  const [color ,setColor] = useState("Red")


  const handleChange = () =>{
    setColor ((prev) => ( prev === "Red" ? "Blue" : "Red"))
  }
  return (
    <div>
       <h1>This Color is {color}</h1>
       <button onClick={handleChange}>{color === "Red" ? "Blue":"Red"}</button>
    </div>
  )
}

export default Color;