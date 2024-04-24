import { Dialog } from "../../../../components/Dialog";
import useFormSubmit from "./FormSubmit";

interface ContactFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export const ContactForm = (props: ContactFormProps) => {
  const { open, setOpen } = props;

  const { formData, handleChange, handleSubmit } = useFormSubmit(
    { email: "", message: "", name: "" },
    "/api/contact",
  );

  return (
    <Dialog
      title="Contact Me"
      setOpen={setOpen}
      closeOnBackDropClick
      open={open}
      formId="contact-form"
      onSubmit={handleSubmit}
    >
      <div>
        <div className="text-lg">
          <div className="flex flex-col gap-5 font-roboto">
            <div className="mx-1">
              Feel free to contact me using this form below. I'll get back to
              you as soon as I can!
            </div>
            <div className="mt-5 flex flex-row items-center justify-between gap-10">
              <div className="ml-1">Name:</div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                className="mx-1 flex-grow rounded-md border border-primary p-2 text-black"
              />
            </div>
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="ml-1">Email:</div>
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
              rows={10}
              className="mx-1 rounded-md border border-primary p-2 text-black"
            />
          </div>
          <div className="my-5" />
        </div>
      </div>
    </Dialog>
  );
};
