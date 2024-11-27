import { FormEvent, useState } from "react";
import { LoginSchema } from "@/app/schemas/userSchema";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useUserLogin } from "@/ReactQuery/authServices";
import { ZodError } from "zod";

export const useSetLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: userLogin } = useUserLogin();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const validatedData = LoginSchema.parse({ email, password });
      console.log(validatedData);
      userLogin(validatedData, {
        onSuccess: (response) => {
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
          toast.error(`${err.message}`, {
            position: "top-right",
          });
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
