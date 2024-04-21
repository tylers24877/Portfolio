import { Fragment } from "react/jsx-runtime";
import { DarkModeSwitch } from "./DarkModeSwitch/DarkModeSwitch";

export const Links = () => {
  const socialLinks = [
    ["GitHub", "https://github.com/tylers24877"],
    ["LinkedIn", "https://www.linkedin.com/in/tyler-schultz-1b1b3b1b3/"],
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
              className="hover:drop-shadow-md text-lg"
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
