import React, { useState } from "react";

function Form() {
const [objData,setObjData] = useState({})

  const getInput = (value,name) => {
    let data = { [name]: value };
  
    setObjData({...objData,...data})
    
  };
const submit = (e) => {
  e.preventDefault()
  console.log(objData);
  
}
  
  
  return (
    <form onSubmit={submit}>
      <div className="form" style={{ padding: "30px" }}>
        <input
          placeholder="Write your Name"
          type="text"
          name="name"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />
        <br />
        <br />
        <input
          placeholder="Write your Age"
          type="number"
          name="age"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />
        <br />
        <br />
        <input
          placeholder="Write your Hobbies"
          type="text"
          name="hobbies"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />
        <br />
        <br />
        <input
          placeholder="Write your Date..."
          type="date"
          name="date"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />
        <br />
        <br />
        <button type="submit">submit</button>
        <br />
        <br />
        <button type="reset">reset</button>
      </div>
    </form>
  );
}

export default Form;
