import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Example = ({ setTheme }) => {
  const [selected, setSelected] = useState("light");

  const handleThemeChange = (theme) => {
    setSelected(theme);
    setTheme(theme);
  };

  return (
    <div
      className={`grid h-[0px] place-content-center transition-colors ${
        selected === "light" ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <SliderToggle selected={selected} handleThemeChange={handleThemeChange} />
    </div>
  );
};

const SliderToggle = ({ selected, handleThemeChange }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          handleThemeChange("light");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          handleThemeChange("dark");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full border-tan border-solid border-2 "
        />
      </div>
    </div>
  );
};

export default Example;
