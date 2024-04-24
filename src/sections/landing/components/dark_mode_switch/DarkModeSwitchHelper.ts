import { useEffect, useState } from "react";

export const useDarkMode = () => {
  // State to track whether dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    localStorage.setItem("theme", (!isDarkMode).toString());
    setIsDarkMode(!isDarkMode);
  };

  // Effect to check if the user's system prefers dark mode or locally stored theme set.
  useEffect(() => {
    const localState = localStorage.getItem("theme");
    if (localState !== null) {
      setIsDarkMode(localState === "true");
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDarkMode(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect to update the body class based on dark mode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};
