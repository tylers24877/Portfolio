import { ReactNode, useRef } from "react";
import { useIsVisible } from "../hooks/Visible";

interface VisibleTransitionProps {
  children: ReactNode;
  duration?: string;
}
/**
 * Fades the content in or out based on its visibility.
 *
 * @param props - The transition props.
 */
export const FadeVisible = (props: VisibleTransitionProps) => {
  const { children, duration = "duration-700" } = props;
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  return (
    <div
      ref={ref}
      className={`transition-opacity ${duration} ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};
export const SlideLeftInVisible = (props: VisibleTransitionProps) => {
  const { children, duration = "duration-700" } = props;
  const ref = useRef();

  // Custom hook to detect visibility
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={` transform transition ${duration} ease-in-out sm:duration-700 ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-[-20px] translate-y-[-20px] opacity-0"}`}
    >
      {children}
    </div>
  );
};