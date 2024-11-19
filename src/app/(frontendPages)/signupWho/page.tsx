"use client";

import React, { useState, FormEvent } from "react";
import {
  ArrowRight,
  Briefcase,
  Search,
  Users,
  Code,
  Database,
  Brain,
} from "lucide-react";
import Header from "@/app/CommonComps/Header";
import { useRouter } from "next/navigation";

type Role = "talent" | "employer" | "";

export default function Component() {
  const [selectedRole, setSelectedRole] = useState<Role>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle role selection logic here
    console.log("Selected role:", selectedRole);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center p-4 ">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105 duration-500">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome to DataJobs
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign up to your role in the tech ecosystem
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <button
                type="button"
                className={`relative w-full flex items-center justify-center px-4 py-6 border ${
                  selectedRole === "talent"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "border-gray-300 text-gray-700"
                } rounded-lg shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300`}
                onClick={() => setSelectedRole("talent")}
              >
                <div className="flex items-center">
                  <Search className="h-6 w-6 mr-3" />
                  <div className="text-left">
                    <div className="text-lg font-medium">Talent Seeker</div>
                    <div className="text-sm text-gray-500">
                      I'm exploring career opportunities
                    </div>
                  </div>
                </div>
                {selectedRole === "talent" && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                  </span>
                )}
              </button>
              <button
                type="button"
                className={`relative w-full flex items-center justify-center px-4 py-6 border ${
                  selectedRole === "employer"
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "border-gray-300 text-gray-700"
                } rounded-lg shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300`}
                onClick={() => setSelectedRole("employer")}
              >
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  <div className="text-left">
                    <div className="text-lg font-medium">Talent Acquirer</div>
                    <div className="text-sm text-gray-500">
                      I'm hiring tech professionals
                    </div>
                  </div>
                </div>
                {selectedRole === "employer" && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                  </span>
                )}
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 cursor-pointer"
                disabled={!selectedRole}
                onClick={() => {
                  if (selectedRole === "talent") {
                    router.push("/user/signup");
                  } else if (selectedRole === "employer") {
                    router.push("/employer/signup");
                  }
                }}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3 ">
                  <Briefcase className="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                </span>
                Continue
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className="text-center">
              Already have an account?{" "}
              <span
                className="text-blue-700 font-semibold cursor-pointer"
                onClick={() => {
                  router.push("/loginWho");
                }}
              >
                login here
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
