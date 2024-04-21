import { Fragment } from "react/jsx-runtime";
import { MyProjectsBottomSwirl } from "../../components/swirls/MyProjectsBottomSwirl";

const SwirlBottom = () => {
  return (
    <div className="absolute -bottom-[80px] left-0 z-10 mx-auto w-full">
      <MyProjectsBottomSwirl className="h-32 w-full scale-x-[-1] fill-surface-variant" />
    </div>
  );
};
export const MyProjectsSection = () => {
  return (
    <Fragment>
      <div className="relative h-[400px] w-full bg-surface-variant">
        <div>jj</div>
        <SwirlBottom />
      </div>
    </Fragment>
  );
};
