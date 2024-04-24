import { ButtonHTMLAttributes, Fragment, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
}
/**
 * A custom button component.
 *
 * @component
 */
export const CustomButton = (props: CustomButtonProps) => {
  const { children, onClick } = props;
  return (
    <Fragment>
      <button
        {...props}
        onClick={onClick}
        className="
        hover:drop-shadow-1xl 
        onClick={onClick} 
        rounded-xl
        bg-primary
        px-5
        py-1
        text-xl
        tracking-wider
        text-on-primary
        drop-shadow-md
        transition-all
        duration-300
        ease-in-out hover:brightness-125"
      >
        {children}
      </button>
    </Fragment>
  );
};
