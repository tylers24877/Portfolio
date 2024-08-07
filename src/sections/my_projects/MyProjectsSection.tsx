import { Fragment } from "react/jsx-runtime";
import { MyProjectsBottomSwirl } from "../../components/swirls/MyProjectsBottomSwirl";
import { ProjectCard } from "./components/ProjectCard";
import { useHorizontalScroll } from "../../hooks/HorizontalScroll";
import { FadeVisible } from "../../components/Transition";
import { projectList } from "../../Res";

const Title = () => {
  return (
    <div className="font-justAnotherHand me-8 text-right text-6xl md:me-32 lg:me-72 md:text-7xl xl:me-[250px] 2xl:me-[500px]">
      My Projects
    </div>
  );
};

const SwirlBottom = () => {
  return (
    <div className="absolute -bottom-[80px] left-0 z-10 mx-auto w-full">
      <MyProjectsBottomSwirl className="h-32 w-full scale-x-[-1] fill-surface-variant" />
    </div>
  );
};

const Projects = () => {
  const ref = useHorizontalScroll();

  return (
    <div
      ref={ref}
      className="md:masonry-2-col lg:masonry-3-col before:box-inherit after:box-inherit mx-0 box-border md:mx-10"
    >
      {projectList.map((item, index) => (
        <div className="break-inside py-2" key={index}>
          <FadeVisible>
            <ProjectCard item={item} />
          </FadeVisible>
        </div>
      ))}
    </div>
  );
};

export const MyProjectsSection = () => {
  return (
    <Fragment>
      <div className="relative w-full bg-surface-variant py-12">
        <Title />
        <Projects />
        <SwirlBottom />
      </div>
    </Fragment>
  );
};
