import { ReactNode } from "react";

interface CardProps {
  techName: string;
  icon: ReactNode;
}

/**
 * Renders a card component displaying the name and image of a technology.
 *
 * @param {CardProps} props - The props object containing the name and imageURL.
 */
export const Card = (props: CardProps) => {
  const { techName, icon } = props;
  return (
    <div className="flex h-[280px] w-[210px] flex-col items-center justify-between rounded-[30px] bg-primary outline-1 outline-outline drop-shadow-md">
      <div className="mt-8 text-4xl text-on-primary">{techName}</div>
      <div className="mb-[45px] h-[130px] w-[130px] items-center justify-center">
        {icon}
      </div>
    </div>
  );
};
