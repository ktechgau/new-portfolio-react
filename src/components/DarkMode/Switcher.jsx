import React, { useState } from "react";
import useDarkSide from "./useDarkSide.jsx";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import styled from "styled-components";

const StyledDarkModeSwitch = styled(DarkModeSwitch)`
  .react-toggle-thumb {
    background-color: white !important;
  }
`;

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <StyledDarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={32}
          moonColor="white"
          sunColor="white"
        />
      </div>
    </>
  );
}
