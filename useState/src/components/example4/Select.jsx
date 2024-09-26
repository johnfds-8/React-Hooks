import { useState } from "react";

function Select() {
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });

  const contries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pak",
      value: "PK",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "Bangladesh",
      value: "BG",
      cities: ["Dhaka", "Chittagong"],
    },
  ];

  return (
    <div>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {contries.map((item, index) => (
          <option value={index} key={index}>{item.name}</option>
        ))}
      </select>

      <select value={country}>
        {contries[country].cities.map((item, index) => (
          <option value={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
