import { useState } from "react";

function Filter() {
  const users = ["Alice", "Bob", "Charlie", "Amith", "Akshah"];

  const [input, setInput] = useState("");

  const filterUserList = users.filter((user) => {
    return user.toLowerCase().includes(input.toLowerCase());
  });

  const userInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      {/* //* User Name search hear */}

      <label htmlFor="text"> User Name : </label>
      <input type="text" onChange={userInput} />

      {/* //*Show the list hear */}
      <ul>
        {filterUserList.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      
    </div>
  );
}

export default Filter;
