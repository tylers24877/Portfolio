import { useEffect, useState } from "react";

export const useDarkMode = () => {
  // State to track whether dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = (value?: boolean) => {
    if (value) {
      // If a specific value is provided, set dark mode accordingly
      return setIsDarkMode(value);
    }
    // If no specific value is provided, toggle dark mode
    setIsDarkMode(!isDarkMode);
  };

  // Effect to check if the user's system prefers dark mode
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // If user's system prefers dark mode, enable dark mode
      toggleDarkMode(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect to update the body class based on dark mode state
  useEffect(() => {
    if (isDarkMode) {
      // If dark mode is enabled, add 'dark' class to body
      document.body.classList.add("dark");
    } else {
      // If dark mode is disabled, remove 'dark' class from body
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Return current dark mode state and function to toggle dark mode
  return { isDarkMode, toggleDarkMode };
};
