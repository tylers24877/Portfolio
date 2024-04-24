import { Fragment } from "react/jsx-runtime";
import { DarkModeSwitch } from "./dark_mode_switch/DarkModeSwitch";

/**
 * Renders a list of social links and a dark mode switch.
 */
export const Links = () => {
  const socialLinks = [
    ["GitHub", "https://github.com/tylers24877"],
    ["LinkedIn", "https://www.linkedin.com/in/tyler-simmonds-327a861a7/"],
    ["CV", "TODO"],
    ["Contact Me", "TODO"],
  ];
  return (
    <Fragment>
      <div className="flex">
        {socialLinks.map(([name, link]) => (
          <div className="flex flex-1 flex-col items-center justify-center">
            <a
              href={link}
              target="_blank"
              className="text-xl hover:drop-shadow-md md:text-2xl"
            >
              {name}
            </a>
          </div>
        ))}
        <div className="flex flex-1 flex-col items-center justify-center">
          <DarkModeSwitch />
        </div>
      </div>
    </Fragment>
  );
};
