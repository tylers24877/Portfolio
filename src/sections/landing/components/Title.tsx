import { Fragment } from "react/jsx-runtime";

/**
 * Renders the title component for the landing section.
 */
export const Title = () => {
  return (
    <Fragment>
      <div className="relative mx-auto w-fit">
        <div className="">
          <div className="font-justAnotherHand text-[100px] leading-none md:-ms-20 lg:text-[150px]">
            Hi,
          </div>
        </div>
        <div className="font-justAnotherHand text-[100px] leading-none">
          I'm Tyler
        </div>
      </div>
      <div className="mt-5">
        <div className="text-[18px] text-on-surface">
          {"> A Web & Software Developer"}
        </div>
      </div>
    </Fragment>
  );
};
