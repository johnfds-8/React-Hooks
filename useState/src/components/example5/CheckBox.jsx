import { useState } from "react";

function CheckBox() {
  const arr = ["play cricket", "play video game", "read book"];
  const [arryCopy , setArryCopy] = useState(arr);

  const handleDelete = (e) => {
  
  };

  return (
    <div className="checkbox">
      <ul>
        {arr.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={handleDelete}>Delete Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckBox;
