import { TechStackTopSwirl } from "../../components/icons/TechStackTopSwirl";

export const TechStackSection = () => {
  return (
    <div className="relative h-[400px] bg-surface-variant">
      <div className="absolute -top-28 left-0 mx-auto">
        <TechStackTopSwirl className="h-32 w-screen fill-surface-variant " />
      </div>
    </div>
  );
};
