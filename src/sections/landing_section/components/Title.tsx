import { Fragment } from "react/jsx-runtime";

export const Title = () => {
  return (
    <Fragment>
      <div className="relative justify-center items-center">
        <div className="">
          <div className="text-[100px] leading-none">Hi,</div>
        </div>
        <div className="absolute bottom-[-5px] left-2">
          <div className="text-on-surface text-[22px]">
            {"> A Software Developer"}
          </div>
        </div>
        <div className="text-[100px] leading-none">
          I'm Tyler
        </div>
      </div>
    </Fragment>
  );
};
