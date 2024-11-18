"use client";

import Header from "@/app/CommonComps/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Component() {
  const [userType, setUserType] = useState("");
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = () => {};
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md ">
          <h1 className="text-2xl font-bold mb-2">
            Sign up for DataScientistBoard
          </h1>
          <p className="text-gray-600 mb-6">
            Create your account to get started
          </p>

          <form className="space-y-4" onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your full name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
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

            <div>
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
                placeholder="Create a password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Confirm your password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="userType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                I am a
              </label>
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select user type</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="educator">Educator</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
              onClick={() => {
                router.push("/login");
              }}
            >
              Log in
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
