import { useState } from "react"
import Child from "./Child"

function Props() {
  const [name,setName]= useState("Nishanth")
  return (
    <div>
      <Child valueOfprop={name}/>

      <button onClick={()=>setName("Udhay")}>Change name</button>
    </div>
  )
}

export default Props