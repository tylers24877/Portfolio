import { Fragment } from "react/jsx-runtime";
import { DarkModeSwitch } from "./dark_mode_switch/DarkModeSwitch";
import { socialLinks } from "../../../Res";

/**
 * Renders a list of social links and a dark mode switch.
 */
export const Links = () => {
  return (
    <Fragment>
      <div className="flex">
        {socialLinks.map(([name, link]) => (
          <div className="flex flex-1 flex-col items-center justify-center ">
            <a
              href={link}
              target="_blank"
              className="text-center hover:drop-shadow-md"
            >
              {name}
            </a>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center px-3">
          <DarkModeSwitch />
        </div>
      </div>
    </Fragment>
  );
};
