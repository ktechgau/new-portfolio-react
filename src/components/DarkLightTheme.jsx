import React, { useState } from "react";
import NavBar from "./NavBar/Navbar";
import HomePage from "./Home/Home";

function DarkLight() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  console.log("setTheme prop type:", typeof setTheme);
  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      <HomePage theme={theme} setTheme={setTheme} />
      <Example theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default DarkLight;
