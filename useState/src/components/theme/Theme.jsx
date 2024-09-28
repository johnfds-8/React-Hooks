import React, { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState(false);

  const toogleTheme = () => {
    setTheme(!theme);
    console.log(!theme);
  };

  return (
    <>
      <div className={theme ? "dark" : "white"}>

        <h1>This is {theme ? "Dark" : "White"} Mode</h1>

        <button onClick={toogleTheme}>
          Switch To {theme ? "White" : "Dark"} Mode
        </button>

      </div>
    </>
  );
}

export default Theme;
