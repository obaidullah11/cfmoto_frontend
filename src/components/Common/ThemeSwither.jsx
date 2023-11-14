import React, { useState } from "react";

function ThemeSwither() {
  const [theme, setTheme] = useState(true);
  return (
    <>
      <label
        id="switch"
        className="switch"
        onClick={() => setTheme(!theme)}
      >
        <input type="checkbox" id="slider" />
        <span className={theme ? "text active" : "text"}>
          {theme ? "Dark" : "Light"}
        </span>
        <span
          className={
            theme ? `slider active round` : `slider round transition-primary`
          }
        ></span>
      </label>
    </>
  );
}

export default ThemeSwither;
