import { Fragment } from "react/jsx-runtime";
import { Title } from "./components/Title";
import { CustomButton } from "../../components/CustomButton";
import { ArrowDown } from "../../components/icons/ArrowDown";
import { Links } from "./components/Links";

/**
 * Renders the left section of the landing page.
 */
const LeftSection = () => {
  return (
    <Fragment>
      <img
        src="src/assets/landing_photo.jpg"
        className="h-screen w-full object-cover"
      />
    </Fragment>
  );
};

/**
 * Renders the right section of the landing page.
 */
const RightSection = () => {
  return (
    <Fragment>
      <div className="grid h-screen grid-rows-12 py-5">
        <div className="row-start-1 text-center">
          <Links />
        </div>
        <div className="row-start-4">
          <Title />
        </div>
        <div className="row-start-9 text-center">
          <CustomButton>Contact Me</CustomButton>
        </div>
        <div className="row-start-10 text-center">
          <div className="pb-1 text-lg">Or</div>
        </div>
        <div className="row-start-11 text-center">
          <div className="pb-1 text-lg">Scroll to find out more</div>

          <ArrowDown className="mx-auto size-14 animate-bounce fill-secondary" />
        </div>
      </div>
    </Fragment>
  );
};

/**
 * Renders the landing section of the portfolio page.
 */
export const LandingSection = () => {
  return (
    <Fragment>
      <div className="flex">
        <div className="hidden flex-1 sm:block">
          <LeftSection />
        </div>
        <div className="flex-1">
          <RightSection />
        </div>
      </div>
    </Fragment>
  );
};
