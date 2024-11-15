"use client";

import Header from "@/app/CommonComps/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const submitHandler = () => {};

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-2">
            Login to DataScientistBoard
          </h1>
          <p className="text-gray-600 mb-6">
            Enter your credentials to access your account
          </p>

          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your password"
                onChange={(e) => {
                  e.target.value;
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Sign up
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
