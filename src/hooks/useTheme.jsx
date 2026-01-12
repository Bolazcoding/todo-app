import { useEffect } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

export function useTheme() {
  // "light" is default
  const [theme, setTheme] = useLocalStorageState("light", "theme");

  // Apply theme class to html whenever it changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return [theme, toggleTheme];
}
