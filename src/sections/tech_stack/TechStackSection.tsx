import { Fragment } from "react/jsx-runtime";
import { TechStackTopSwirl } from "../../components/swirls/TechStackTopSwirl";
import { Card } from "./components/Card";
import { TechStackBottomSwirl } from "../../components/swirls/TechStackBottomSwirl";
import { useHorizontalScroll } from "../../hooks/HorizontalScroll";
import { FadeVisible } from "../../components/Transition";
import { techStacks } from "../../Res";

const SwirlTop = () => {
  return (
    <div className="absolute -top-28 left-0 z-0 mx-auto w-full">
      <TechStackTopSwirl className="h-32 w-full fill-surface-variant " />
    </div>
  );
};
const SwirlBottom = () => {
  return (
    <div className="absolute -bottom-28 left-0 z-0 mx-auto w-full">
      <TechStackBottomSwirl className="h-32 w-full fill-surface-variant " />
    </div>
  );
};
const Title = () => {
  return (
    <Fragment>
      <div className="text-center text-7xl leading-none text-on-surface">
        Tech Stacks
      </div>
      <div className="text-center text-2xl leading-none text-on-surface">
        which I use the most
      </div>
    </Fragment>
  );
};

const Cards = () => {
  const ref = useHorizontalScroll();

  return (
    <div ref={ref} className="overflow-auto whitespace-nowrap py-5 text-center">
      {techStacks.map(([techName, icon], index) => (
        <div className="mx-auto inline-block px-2" key={index}>
          <Card techName={techName} icon={icon} />
        </div>
      ))}
    </div>
  );
};

export const TechStackSection = () => {
  return (
    <Fragment>
      <div className="relative bg-surface-variant">
        <SwirlTop />
        <div className="relative z-10 pt-3">
          <FadeVisible>
            <Title />
            <Cards />
          </FadeVisible>
        </div>
        <SwirlBottom />
      </div>
    </Fragment>
  );
};
