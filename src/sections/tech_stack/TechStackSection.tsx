import { Fragment } from "react/jsx-runtime";
import { TechStackTopSwirl } from "../../components/icons/TechStackTopSwirl";
import { Card } from "./components/Card";
import { ReactIcon } from "../../components/icons/tech_stack/ReactIcon";
import { ReactNode } from "react";
import { TypeScriptIcon } from "../../components/icons/tech_stack/TypeScriptIcon";
import { KotlinIcon } from "../../components/icons/tech_stack/KotlinIcon";
import { PythonIcon } from "../../components/icons/tech_stack/PythonIcon";
import { AWSIcon } from "../../components/icons/tech_stack/AWSIcon";

const Swirl = () => {
  return (
    <div className="absolute -top-28 left-0 z-0 mx-auto w-full">
      <TechStackTopSwirl className="h-32 w-full fill-surface-variant " />
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
  const techStacks: [string, ReactNode][] = [
    ["TypeScript", <TypeScriptIcon className="fill-on-primary" />],
    ["React", <ReactIcon className="fill-on-primary" />],
    ["Kotlin", <KotlinIcon className="fill-on-primary" />],
    ["Python", <PythonIcon className="fill-on-primary" />],
    ["AWS", <AWSIcon className="fill-on-primary" />],
  ];
  return (
    <div className="overflow-auto whitespace-nowrap py-10 text-center">
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
    <div className="relative bg-surface-variant">
      <Swirl />
      <div className="relative z-10">
        <Title />
      </div>
      <Cards />
    </div>
  );
};