import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { logout } from "@/ReactQuery/authServices";
function Header({}) {
  const router = useRouter();
  const { id, userType } = useSelector((state: RootState) => state.auth);
  return (
    <>
      {userType === null && (
        <header className="flex justify-between items-center p-4 md:p-6">
          <h1
            className="text-blue-600 text-2xl font-bold cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            DataJobs
          </h1>
          <div className="space-x-4">
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </button>
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Sign Up
            </button>
          </div>
        </header>
      )}
      {userType === "jobSeeker" && (
        <header className="bg-white border-b">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded "></div>
              <h1
                className="text-xl font-bold cursor-pointer"
                onClick={() => {
                  router.push("/dashboard");
                }}
              >
                DataJobs
              </h1>
            </div>

            <div className="flex gap-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => {
                  router.push("/makeProfile");
                }}
              >
                Post Your Profile
              </button>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </header>
      )}
      {userType === "employer" && (
        <header className="bg-white border-b">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded "></div>
              <h1
                className="text-xl font-bold cursor-pointer"
                onClick={() => {
                  router.push("/dashboard");
                }}
              >
                DataJobs
              </h1>
            </div>

            <div className="flex gap-4">
              <button
                className="border px-4 py-2 rounded-md hover:bg-slate-50"
                onClick={() => {
                  router.push("/dashboard");
                }}
              >
                Data Scientist
              </button>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => {
                  router.push("/subscription-plans");
                }}
              >
                Subscription
              </button>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
