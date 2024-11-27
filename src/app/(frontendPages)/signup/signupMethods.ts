import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string;
}

export const useSetSignForm = (userReg: any) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userReg(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
