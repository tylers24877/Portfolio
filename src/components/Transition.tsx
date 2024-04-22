import { ReactNode, useRef } from "react";
import { useIsVisible } from "../hooks/Visible";

interface TransitionProps {
  children: ReactNode;
}
export const Transition = (props: TransitionProps) => {
  const { children } = props;
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};
