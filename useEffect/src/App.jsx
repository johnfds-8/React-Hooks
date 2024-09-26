import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/?q=${search}`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  },[search]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="app">
      <label htmlFor="text">Type User Name: </label>
      <input type="text" value={search} onChange={handleInput} />

      {users.map((user, id) => (
        <div
          key={id}
          style={{ border: "2px solid grey", padding: "50px", width: "30%" }}>
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>
          <h4>{user.email}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
