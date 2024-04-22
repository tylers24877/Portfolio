import { Fragment } from "react/jsx-runtime";
import { DarkModeSwitch } from "./DarkModeSwitch/DarkModeSwitch";

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
          <div className="flex-1">
            <a
              href={link}
              target="_blank"
              className="text-lg hover:drop-shadow-md"
            >
              {name}
            </a>
          </div>
        ))}
        <div className="flex-1">
          <DarkModeSwitch />
        </div>
      </div>
    </Fragment>
  );
};
