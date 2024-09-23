import { useState } from "react";

function User() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <label htmlFor="text">Search:</label>
      <input type="text" placeholder="type here" onChange={handleChange} />

      <h1>User Typeing:{input}</h1>
    </div>
  );
}

export default User;
