import { useState } from "react";

function State() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [isVisiable, setIsVisable] = useState(false);
  const [array, setArray] = useState([
    {
      name: "Nishath",
      age: 25,
    },
    {
      name: "Uaday",
      age: 26,
    },
  ]);
  const [object, setObject] = useState({
    name: "Nishath",
    age: 25,
  });

  const Increment = () => {
    setCount(count + 1);
    setIsVisable(!isVisiable);
    setArray([...array,{name:"jo"}])
    setObject({name:"john"})
  };

  return (

    <div>

      <h1>{count}</h1>
      <h2>{array.name}</h2>
      <h2>{object.name}</h2>
      {isVisiable ? <h1>Visable</h1> : <h1>Not Visable</h1>}
      <button onClick={Increment}>Increment The Number</button>
    </div>
  );
}

export default State;
