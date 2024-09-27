import React from "react";

function Event() {
  const addNum = () => {
    console.log(2 + 2);
  };


  const Input = (e) =>{
    console.log(e.target.value);
    
  }
  return (
    <div>
      <h1>This is event Handling</h1>
      {/* //* onChange Event */}
    

    <input type="text" placeholder="Type somthing here"onChange={Input}/>
    

      {/* //*OnClick Event */}
      <button onClick={addNum}>Add Number</button>
    </div>
  );
}

export default Event;
