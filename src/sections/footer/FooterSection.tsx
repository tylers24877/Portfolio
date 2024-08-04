import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

/**
 * Represents a link in the footer section.
 */
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a href={href} className="under underline" target="_blank">
    {children}
  </a>
);

export const FooterSection = () => {
  return (
    <Fragment>
      <div className="flex h-[200px] w-full items-end justify-center bg-secondary pb-8">
        <div className="text-center tracking-wider text-on-secondary">
          This work is open source on{" "}
          <FooterLink href="https://github.com/tylers24877">GitHub</FooterLink>{" "}
          | Built with <FooterLink href="https://react.dev/">React</FooterLink>{" "}
          and <FooterLink href="https://tailwindcss.com/">Tailwind</FooterLink>{" "}
          with icons from{" "}
          <FooterLink href="https://icons8.com/">Icons8</FooterLink>
          <br />
          On the ☁︎ at{" "}
          <FooterLink href="https://aws.amazon.com/">AWS</FooterLink>
        </div>
      </div>
    </Fragment>
  );
};
