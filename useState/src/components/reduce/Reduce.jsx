// Calculation the total age of all users
function Reduce() {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 34 },
    { name: "Charlie", age: 32 },
  ];

  const totalAge = users.reduce(
    (accumulator, user) => accumulator + user.age,
    0
  );

  // console.log(totalAge);
  

  return <div>Totall Age :{totalAge}</div>;
}

export default Reduce;
