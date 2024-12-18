import { useEffect } from "react";
import "../styles/ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDarkMode = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  // Считываем сохранённую тему при монтировании компонента
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="text-right my-4">
      <button
        className="switcher-color"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
