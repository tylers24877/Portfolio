import { Fragment } from "react/jsx-runtime";
import { AboutMeTitle } from "../../components/AboutMeTitle";
import { AboutMeBottomSwirl } from "../../components/swirls/AboutMeBottomSwirl";
import { FadeVisible } from "../../components/Transition";
import { aboutMe } from "../../Res";

const SwirlBottom = () => {
  return (
    <div className="absolute -bottom-24 left-0 z-10 mx-auto w-full">
      <AboutMeBottomSwirl className="h-32 w-full fill-surface " />
    </div>
  );
};

export const AboutMeSection = () => {
  return (
    <Fragment>
      <div className="md:mt-55 relative mt-[105px] pb-10">
        <div className="flex flex-col px-5 md:flex-row md:px-20">
          <div className="order-2 whitespace-pre-line font-roboto md:order-1 md:w-7/12 md:pr-4">
            <FadeVisible>
              <AboutMeTitle className="mx-auto h-[100px] w-[170px] fill-on-surface" />
              {aboutMe}
            </FadeVisible>
          </div>
          <div className="order-1 flex items-center justify-center max-md:pb-4 md:order-2 md:w-5/12 md:pl-4">
            <FadeVisible>
              <img
                className="mx-auto max-h-[200px] scale-x-[-1] rounded-full outline outline-2 outline-outline-variant drop-shadow-lg md:max-h-[400px]"
                src="/profile_photo.jpg"
                alt="Profile Photo - Isle of Skye"
              />
            </FadeVisible>
          </div>
        </div>
        <SwirlBottom />
      </div>
    </Fragment>
  );
};
