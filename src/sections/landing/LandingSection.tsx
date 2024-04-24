import { Fragment } from "react/jsx-runtime";
import { Title } from "./components/Title";
import { CustomButton } from "../../components/CustomButton";
import { ArrowDown } from "../../components/icons/ArrowDown";
import { Links } from "./components/Links";
import { FadeVisible, SlideLeftInVisible } from "../../components/Transition";
import { useState } from "react";
import { ContactForm } from "./components/contact_form/ContactForm";

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
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <ContactForm open={open} setOpen={setOpen} />
      <div className="flex h-screen flex-col">
        <div className="mt-2 flex-shrink text-center">
          <FadeVisible duration="duration-300">
            <Links />
          </FadeVisible>
        </div>
        <div className="flex flex-grow items-center justify-center">
          <SlideLeftInVisible duration="duration-300">
            <Title />
          </SlideLeftInVisible>
        </div>
        <div className="mb-32 flex flex-shrink flex-col gap-2 text-center md:mb-16">
          <div className="text-center">
            <FadeVisible duration="duration-300">
              <CustomButton onClick={() => setOpen(true)}>
                Contact Me
              </CustomButton>
            </FadeVisible>
          </div>
          <div className="text-center">
            <FadeVisible duration="duration-300">
              <div className="pb-1 text-lg">Or</div>
            </FadeVisible>
          </div>
          <FadeVisible duration="duration-300">
            <div className="pb-1 text-2xl">Scroll to find out more</div>
            <ArrowDown className="mx-auto size-14 animate-bounce fill-secondary" />
          </FadeVisible>
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
          <FadeVisible duration="duration-300">
            <LeftSection />
          </FadeVisible>
        </div>
        <div className="flex-1">
          <RightSection />
        </div>
      </div>
    </Fragment>
  );
};
