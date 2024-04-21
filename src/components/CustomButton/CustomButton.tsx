import { Fragment, ButtonHTMLAttributes } from "react";
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CustomButton = (props: CustomButtonProps) => {
  const { children } = props;
  return (
    <Fragment>
      <button
        {...props}
        className="
        bg-primary 
        text-on-primary 
        text-xl
        py-1
        px-5
        rounded-xl
        tracking-wider
        drop-shadow-md
        hover:drop-shadow-1xl
        hover:brightness-125
        transition-all
        duration-300
        ease-in-out
        
        "
      >
        {children}
      </button>
    </Fragment>
  );
};
