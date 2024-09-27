import { useState } from "react";

function Count() {
  const [count, setCount] = useState(1);

  const Increment = () => {
    setCount(count + 1);
  }

    const Decrement = () => {
      setCount(count - 1);
    };

  return ( 
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default Count;
