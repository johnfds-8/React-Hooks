import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    name:"XUV",
    model:"Tata",
    year:"1999"
  });

  const handleChange = () =>{
   setCar((prev)=>{
    return {  ...prev,name:"Thar"
    }
   })
  }

  
  return (
    <div>
      <h1>My Car Name is {car.name}.</h1>
      <p>Model is {car.model}.Build in {car.year} year</p>
      <button onClick={handleChange}>Change The Car</button>
    </div>
  );
}

export default Car;
