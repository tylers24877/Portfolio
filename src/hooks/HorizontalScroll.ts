import { useRef, useEffect, RefObject } from "react";

/**
 * Custom hook that enables horizontal scrolling for a given element.
 * @returns {React.RefObject<HTMLDivElement>} The ref object that should be attached to the element.
 */
export function useHorizontalScroll(): RefObject<HTMLDivElement> {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current as HTMLElement;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (el.scrollWidth > el.clientWidth) {
          e.preventDefault();
          el.scrollBy({
            left: e.deltaY < 0 ? -30 : 30,
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
