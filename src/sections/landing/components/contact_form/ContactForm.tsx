import { Fragment } from "react/jsx-runtime";
import { Dialog } from "../../../../components/Dialog";
import useFormSubmit from "./FormSubmit";
import { Toast } from "../../../../components/Toast";
import { useState } from "react";

interface ContactFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export const ContactForm = (props: ContactFormProps) => {
  const { open, setOpen } = props;

  const [toastOpen, setToastOpen] = useState(false);
  const handleFormClose = () => {
    setOpen(false);
    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false);
    }, 5000);
  };
  const { formData, handleChange, handleSubmit, loading, error } =
    useFormSubmit(
      { email: "", message: "", name: "" },
      "https://tylersimmonds.dev/api/contact",
      handleFormClose,
    );
  return (
    <Fragment>
      {toastOpen && <Toast>Message Sent Successfully</Toast>}
      <Dialog
        title="Contact Me"
        setOpen={setOpen}
        closeOnBackDropClick
        open={open}
        formId="contact-form"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div>
          <div className="text-lg">
            <div className="flex flex-col gap-5">
              <div className="ml-1 mr-5">
                Feel free to contact me using this form below. I'll get back to
                you as soon as I can!
              </div>
              <div className="mt-5 flex flex-col gap-1 md:flex-row md:items-center md:justify-center md:gap-10">
                <div className="ml-1 w-14">Name:</div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  required
                  className="mx-1 flex-grow rounded-md border border-primary p-2 text-black"
                />
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-center md:gap-10">
                <div className="ml-1 w-14">Email:</div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="mx-1 flex-grow rounded-md border border-primary p-2 text-black"
                />
              </div>
              <div className="ml-1">Message:</div>
              <textarea
                name="message"
                form="contact-form"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mx-1 rounded-md border border-primary p-2 text-black"
              />
            </div>
            <div className="my-5" />
          </div>
        </div>
      </Dialog>
    </Fragment>
  );
};
