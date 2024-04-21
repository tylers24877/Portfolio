import { Fragment } from "react/jsx-runtime";
import "./LandingSection.scss";
import { Title } from "./components/Title";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { ArrowDown } from "../../assets/icons/ArrowDown";

export const LandingSection = () => {
  return (
    <Fragment>
      <div className="fixed top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Title />
      </div>
      <div className="grid grid-rows-12 h-screen py-5">
        <div className="row-start-8 text-center">
          <CustomButton>Contact Me</CustomButton>
        </div>
        <div className="row-start-11">
          <ArrowDown className="mx-auto size-14 fill-secondary animate-bounce" />
        </div>
      </div>
    </Fragment>
  );
};
