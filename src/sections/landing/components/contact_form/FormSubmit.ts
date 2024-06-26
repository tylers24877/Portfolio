import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}
const useFormSubmit = (
  initialFormData: FormData,
  endpoint: string,
  closeForm: () => void,
) => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      closeForm();
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setError("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
    error,
  };
};

export default useFormSubmit;
