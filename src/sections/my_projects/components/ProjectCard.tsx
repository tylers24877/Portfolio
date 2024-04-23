import { CustomButton } from "../../../components/CustomButton";

/**
 * Props for the TechLabel component.
 */
interface TechLabelProps {
  name: string;
  className?: string;
}
/**
 * Renders a label for a technology used in a project.
 */
const TechLabel = (props: TechLabelProps) => {
  const { name } = props;
  return (
    <div
      className={`w-fit rounded-full bg-tertiary-container p-1 px-5 text-center text-xl leading-none tracking-wider text-on-tertiary-container shadow-sm outline outline-outline-variant`}
    >
      {name}
    </div>
  );
};

/**
 * Represents the props for the ProjectCard component.
 */
export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

/**
 * Renders a project card component.
 *
 * @component
 */
export const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, techStack, liveLink, githubLink } = props;
  return (
    <div className="m-2 flex h-full flex-col items-center justify-between gap-3 rounded-[30px] bg-primary-container px-5 shadow-md shadow-shadow outline outline-1 outline-outline-variant">
      <div className="mt-8 flex-shrink text-center text-5xl text-on-primary-container">
        {title}
      </div>
      <div className="w-3/4 flex-shrink border-t border-on-primary-container" />
      <div className="relative flex  flex-wrap items-center justify-center gap-2">
        {techStack.map((tech, index) => (
          <TechLabel key={index} name={tech} />
        ))}
      </div>
      <div className="w-full flex-grow items-center justify-center text-center font-roboto  ">
        {description}
      </div>
      <div className="relative flex w-full items-center justify-evenly pb-5">
        {liveLink && (
          <a href={liveLink} target="_blank">
            <CustomButton>View Live</CustomButton>
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank">
            <CustomButton>GitHub</CustomButton>
          </a>
        )}
      </div>
    </div>
  );
};
