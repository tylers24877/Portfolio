import { Fragment } from "react/jsx-runtime";
import { Title } from "./components/Title";
import { CustomButton } from "../../components/CustomButton";
import { ArrowDown } from "../../components/icons/ArrowDown";
import { Links } from "./components/Links";
import { Fade, SlideLeftIn } from "../../components/Transition";

/**
 * Renders the left section of the landing page.
 */
const LeftSection = () => {
  return (
    <Fragment>
      <img src="/landing_photo.jpg" className="h-screen w-full object-cover" />
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
          <Fade duration="duration-300">
            <Links />
          </Fade>
        </div>
        <div className="row-start-3">
          <SlideLeftIn duration="duration-300">
            <Title />
          </SlideLeftIn>
        </div>
        <div className="row-start-8 text-center">
          <Fade duration="duration-300">
            <CustomButton>Contact Me</CustomButton>
          </Fade>
        </div>
        <div className="row-start-9 text-center">
          <Fade duration="duration-300">
            <div className="pb-1 text-lg">Or</div>
          </Fade>
        </div>
        <div className="row-start-10 text-center">
          <Fade duration="duration-300">
            <div className="pb-1 text-lg">Scroll to find out more</div>

            <ArrowDown className="mx-auto size-14 animate-bounce fill-secondary" />
          </Fade>
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
          <Fade duration="duration-300">
            <LeftSection />
          </Fade>
        </div>
        <div className="flex-1">
          <RightSection />
        </div>
      </div>
    </Fragment>
  );
};
