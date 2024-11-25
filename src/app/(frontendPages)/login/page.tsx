"use client";
import { useState } from "react";
import { ArrowRight, AtSign, Lock, Code, Database, Brain } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUserLogin } from "@/ReactQuery/authServices";
import { useSetLogin } from "./loginMethods";
import toast from "react-hot-toast";
import { encrypt } from "@/utils/authHelpers";

export default function Component() {
  const router = useRouter();

  // mutation hook --
  const { mutate: userLogin, isLoading } = useUserLogin();

  // custom login hook --
  const { email, password, setEmail, setPassword, handleSubmit } = useSetLogin(
    (data: any) => {
      userLogin(data, {
        onSuccess: (response) => {
          const encryptedToken = encrypt(response.token);
          localStorage.setItem("at", encryptedToken);
          router.push("/dashboard");
        },
        onError: (err: any) => {
          toast.error(err?.message);
        },
      });
    }
  );

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105 duration-500">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to access your account
            </p>
          </div>
          {isLoading ? (
            <>Loading...</>
          ) : (
            <>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm ">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <AtSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none  relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <Lock className="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                    </span>
                    Sign in
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>

              <div className="mtext-center text-sm text-gray-600 flex justify-center">
                Don't have an account?{" "}
                <div
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  Sign up here
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
