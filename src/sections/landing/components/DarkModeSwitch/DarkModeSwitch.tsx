import { useDarkMode } from "./DarkModeSwitchHelper";

/**
 * A switch component for toggling dark mode.
 */
export const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        checked={isDarkMode}
        onChange={() => toggleDarkMode()}
        className="peer sr-only"
      />
      <div className="peer relative h-6 w-11 rounded-full bg-surface-container after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-outline after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-outline dark:bg-primary"></div>
    </label>
  );
};
