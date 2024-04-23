import { Fragment, ButtonHTMLAttributes } from "react";
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * A custom button component.
 *
 * @component
 */
export const CustomButton = (props: CustomButtonProps) => {
  const { children } = props;
  return (
    <Fragment>
      <button
        {...props}
        className="
        hover:drop-shadow-1xl 
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
        ease-in-out
        hover:brightness-125
        "
      >
        {children}
      </button>
    </Fragment>
  );
};
