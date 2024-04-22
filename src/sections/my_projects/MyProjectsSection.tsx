import { Fragment } from "react/jsx-runtime";
import { MyProjectsBottomSwirl } from "../../components/swirls/MyProjectsBottomSwirl";
import { ProjectCard } from "./components/ProjectCard";

const SwirlBottom = () => {
  return (
    <div className="absolute -bottom-[80px] left-0 z-10 mx-auto w-full">
      <MyProjectsBottomSwirl className="h-32 w-full scale-x-[-1] fill-surface-variant" />
    </div>
  );
};
export const MyProjectsSection = () => {
  return (
    <Fragment>
      <div className="relative w-full bg-surface-variant py-12">
        <div className="me-8 text-right text-6xl md:me-52 md:text-7xl  xl:me-[250px] 2xl:me-[500px]">
          My Projects
        </div>
        <ProjectCard />
        <SwirlBottom />
      </div>
    </Fragment>
  );
};
