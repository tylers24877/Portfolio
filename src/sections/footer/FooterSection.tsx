import { Fragment } from "react/jsx-runtime";

export const FooterSection = () => {
  return (
    <Fragment>
      <div className="flex h-[200px] w-full items-end justify-center bg-secondary pb-8">
        <div className="text-center text-xl tracking-wider text-on-secondary">
          © Tyler Simmonds 2024.
          <br />
          This work is open source on GitHub | Built with React and Tailwind
          <br />
          On the ☁︎ at AWS
        </div>
      </div>
    </Fragment>
  );
};
