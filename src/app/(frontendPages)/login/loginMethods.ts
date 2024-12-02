import { FormEvent, useState } from "react";
import { LoginSchema } from "@/app/schemas/userSchema";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ZodError } from "zod";

export const useSetLogin = (useLogin: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const validatedData = LoginSchema.parse({ email, password });
      useLogin(validatedData, {
        onSuccess: (response: any) => {
          toast.success("Login Successful");
          router.push(`/dashboard/${response?.userType}`);
        },
        onError: (err: any) => {
          toast.error(err?.message);
        },
      });
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((err) => {
          toast.error(`${err.message}`);
        });
      }
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
  };
};
