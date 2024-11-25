import { FormEvent, useState } from "react";

export const useSetLogin = (userLogin: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLogin({ email, password });

    // L-store
    const user = "jobSeeker";
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
  };
};
