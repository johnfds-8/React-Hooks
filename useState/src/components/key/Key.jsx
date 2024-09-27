import React from "react";

function Key() {
  let number = [2, 3, 4, 3, 6, 8, 9, 7, 4, 5];
  let details = [
    {
      name: "Nishanth",
      age: 23,
    },
    {
      name: "Uday",
      age: 34,
    },
    {
      name: "Uday",
      age: 34,
    },
    {
      name: "Rama",
      age: 31,
    },
    {
      name: "Vishu",
      age: 27,
    },
  ];

  return (
    <div>
      <ul>
        {number.sort().map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
      <ul>
        {details.map((detail, i) => (
          <div key={i}>
            <li>{detail.name}</li>
            <li>{detail.age}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Key;
