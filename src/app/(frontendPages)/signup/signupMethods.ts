import { ChangeEvent, FormEvent, useState } from "react";
import { ZodError } from "zod";
import { SignUpSchema } from "@/app/schemas/userSchema";
import { useUserRegister } from "@/ReactQuery/authServices";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string;
}

export const useSetSignForm = () => {
  const { mutate: userReg } = useUserRegister();
  const router = useRouter();

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

    try {
      const validatedData = SignUpSchema.parse(formData);
      userReg(validatedData, {
        onSuccess: () => {
          toast.success("Registration successful");
          router.push("/login");
        },
        onError: (err: any) => {
          toast.error(err?.message);
        },
      });
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((err) => {
          toast.error(`${err.message}`, {
            position: "top-right",
          });
        });
      }
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
