import { ReactNode } from "react";

interface ToastProps {
  children: ReactNode;
}

export const Toast = (props: ToastProps) => {
  const { children } = props;
  return (
    <div
      className="z-50 fixed left-10 bottom-10 max-w-xs transform rounded-lg border border-teal-500 bg-teal-200 text-sm text-teal-800"
      role="alert"
    >
      <div className="flex p-4 text-l font-roboto">{children}</div>
    </div>
  );
};
