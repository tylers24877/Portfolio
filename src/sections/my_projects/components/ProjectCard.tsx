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
      className={`w-fit rounded-full bg-tertiary-container p-1 px-5 text-center text-xl leading-none tracking-wider text-on-tertiary-container shadow-sm outline outline-outline-variant`}
    >
      {name}
    </div>
  );
};

export const ProjectCard = () => {
  return (
    <div className="m-2 flex h-full w-[350px] flex-col items-center justify-between gap-3 rounded-[30px] bg-primary-container px-5 outline outline-2 outline-outline-variant drop-shadow-md">
      <div className="mt-8 flex-shrink text-5xl text-on-primary-container">
        test
      </div>
      <div className="w-3/4 flex-shrink border-t border-on-primary-container" />
      <div className="relative flex items-center gap-2">
        <TechLabel name="TypeScript" />
        <TechLabel name="JavaScript" />
        <TechLabel name="TypeScript" />
      </div>
      <div className="w-full flex-grow items-center justify-center text-center font-roboto  ">
        The sun dipped low on the horizon, painting the sky in hues of orange
        and pink. A gentle breeze rustled through the trees, carrying the scent
        of pine and damp earth. Birds chirped their evening songs as they
        settled into their nests. In the distance, the sound of a river flowing
        over smooth rocks provided a soothing backdrop to the peaceful scene. A
        lone figure sat on a weathered bench, lost in thought, their gaze fixed
        on the horizon. In that moment, time seemed to stand still, allowing for
        reflection and introspection in the tranquility of nature's embrace.
      </div>
      <div className="relative flex w-full items-center justify-evenly pb-5">
        <CustomButton>View Live</CustomButton>
        <CustomButton>GitHub</CustomButton>
      </div>
    </div>
  );
};
