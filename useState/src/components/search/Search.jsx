import { useState } from "react";

function Search() {
  const [input, setInput] = useState("");

  const Items = [
    "Mobile ",
    "Fridge",
    "Cooker",
    "Mixer",
    "Iron Box",
    "Laptop",
    "Camera",
  ];

  const filterItems = Items.filter((item) => {
    return item.toLowerCase().includes(input.toLowerCase());
  });


  const handleInput = (e) => {
    setInput(e.target.value);

  };


  return (
    <div className="search">
      <input type="text" onChange={handleInput} />

      
       
      

      <ul>{filterItems.map((item,i)=>(
            <li key={i}>{item}</li>
      ))}</ul>


    </div>
  );
}

export default Search;
