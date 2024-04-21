import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current as HTMLElement;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();

        el.scrollBy({
          left: e.deltaY < 0 ? -30 : 30,
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
