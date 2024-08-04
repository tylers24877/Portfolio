import { CustomButton } from "../../../components/CustomButton";

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
      className={`w-fit rounded-full bg-tertiary-container p-1 px-5 text-center leading-none text-on-tertiary-container`}
    >
      {name}
    </div>
  );
};

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  buttons?: {
    url: string;
    text: string;
  }[];
}

/**
 * Renders a project card component.
 *
 * @component
 */
export const ProjectCard = ({ item }: { item: ProjectCardProps }) => {
  const { title, description, techStack, buttons } = item;
  return (
    <div className="m-2 flex h-full flex-col items-center justify-between gap-3 rounded-[30px] bg-primary-container px-5 shadow-md shadow-shadow outline outline-1 outline-outline-variant">
      <div className="mt-8 flex-shrink text-center text-2xl text-on-primary-container">
        {title}
      </div>
      <div className="w-3/4 flex-shrink border-t border-on-primary-container" />
      <div className="relative flex  flex-wrap items-center justify-center gap-2">
        {techStack.map((tech, index) => (
          <TechLabel key={index} name={tech} />
        ))}
      </div>
      <div className="w-full flex-grow items-center justify-center text-center">
        {description}
      </div>
      <div className="relative flex w-full flex-wrap items-center justify-evenly gap-2 pb-5">
        {buttons &&
          buttons.map(({ url, text }) => (
            <a href={url} target="_blank">
              <CustomButton>{text}</CustomButton>
            </a>
          ))}
      </div>
    </div>
  );
};
