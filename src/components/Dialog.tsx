import { Fragment } from "react/jsx-runtime";
import { FormEvent, ReactNode } from "react";
import { CustomButton } from "./CustomButton";
import { useDisableScroll } from "../hooks/DisableScroll";

interface BackdropProps {
  setOpen: (open: boolean) => void;
  closeOnBackDropClick?: boolean;
}
const Backdrop = (props: BackdropProps) => {
  useDisableScroll();

  const handleBackdropClick = () => {
    if (props.closeOnBackDropClick) {
      props.setOpen(false);
    }
  };
  return (
    <div
      id="backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black opacity-75"
    />
  );
};

interface CloseButtonProps {
  setOpen: (open: boolean) => void;
}
const CloseButton = (props: CloseButtonProps) => {
  return (
    <svg
      onClick={() => props.setOpen(false)}
      xmlns="http://www.w3.org/2000/svg"
      className="hover h-3 w-3 cursor-pointer fill-on-surface-variant "
      viewBox="0 0 24 24"
    >
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
    </svg>
  );
};

interface CardProps {
  title: string;
  content: ReactNode;
  setOpen: (open: boolean) => void;
  formId?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
  error?: string | null;
}
const Card = (props: CardProps) => {
  return (
    <div className="fixed left-1/2 top-1/2 z-50 h-full w-full -translate-x-1/2 -translate-y-1/2 transform bg-surface-variant p-6 md:w-1/2 md:rounded md:shadow-md">
      <form
        id={props.formId}
        onSubmit={props.onSubmit}
        className="flex h-full flex-col justify-between"
      >
        <div className="mb-4 flex justify-between gap-32 text-5xl">
          <div>{props.title}</div>
          <div>
            <CloseButton setOpen={props.setOpen} />
          </div>
        </div>
        {props.error && (
          <div className="my-2  rounded-md bg-error-container p-1 text-center font-roboto text-error">
            {props.error}
          </div>
        )}
        <div className="flex-grow overflow-auto">{props.content}</div>
        <div className="mt-2">
          <CustomButton loading={props.loading}>Submit</CustomButton>
        </div>
      </form>
    </div>
  );
};

interface DialogProps {
  title: string;
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  closeOnBackDropClick?: boolean;
  formId?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
  error?: string | null;
}
export const Dialog = (props: DialogProps) => {
  return (
    <Fragment>
      {props.open && (
        <Fragment>
          <Backdrop
            setOpen={props.setOpen}
            closeOnBackDropClick={props.closeOnBackDropClick}
          />

          <Card
            setOpen={props.setOpen}
            title={props.title}
            content={props.children}
            formId={props.formId}
            onSubmit={props.onSubmit}
            loading={props.loading}
            error={props.error}
          />
        </Fragment>
      )}
    </Fragment>
  );
};
