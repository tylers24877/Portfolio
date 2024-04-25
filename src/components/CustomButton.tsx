import { ButtonHTMLAttributes, Fragment, ReactNode } from "react";
import { Spinner } from "./Spinner";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
}
/**
 * A custom button component.
 *
 * @component
 */
export const CustomButton = (props: CustomButtonProps) => {
  const { children, onClick, loading } = props;
  return (
    <Fragment>
      <div className="flex w-full items-center justify-center">
        <button
          {...props}
          disabled={loading}
          onClick={onClick}
          className="
        onClick={onClick}
        flex
        min-h-10 
        w-full
        items-center
        justify-center 
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
        ease-in-out hover:enabled:brightness-125 hover:enabled:drop-shadow-xl
        disabled:opacity-50"
        >
          {loading ? <Spinner /> : children}
        </button>
      </div>
    </Fragment>
  );
};
