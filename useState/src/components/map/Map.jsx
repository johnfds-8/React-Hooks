function Map() {
  const users = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Map;
