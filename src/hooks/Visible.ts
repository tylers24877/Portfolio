import { RefObject, useEffect, useState } from "react";

/**
 * Custom hook that returns a boolean indicating whether the specified element is currently visible in the viewport.
 * @param ref - The ref object that points to the element to observe.
 * @param repeat - Optional: A boolean value indicating whether to repeat the observation after the element becomes visible.
 * @returns A boolean value indicating whether the element is visible.
 */
export function useIsVisible(ref: RefObject<HTMLElement>, repeat = false) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!repeat) {
          observer.disconnect();
        }
        setIntersecting(entry.isIntersecting);
      } else setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, repeat]);

  return isIntersecting;
}
