import { FormEvent, useState } from "react";

export const useSetLogin = (userLogin: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLogin({ email, password });
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
  };
};
