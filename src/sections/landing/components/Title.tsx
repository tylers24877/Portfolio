import { Fragment } from "react/jsx-runtime";

/**
 * Renders the title component for the landing section.
 */
export const Title = () => {
  return (
    <Fragment>
      <div className="relative mx-auto w-fit">
        <div className="">
          <div className="text-[100px] leading-none md:-ms-20 lg:text-[150px]">
            Hi,
          </div>
        </div>
        <div className="absolute bottom-[-5px] left-2">
          <div className="text-[22px] text-on-surface">
            {"> A Software Developer"}
          </div>
        </div>
        <div className="text-[100px] leading-none">I'm Tyler</div>
      </div>
    </Fragment>
  );
};
