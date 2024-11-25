import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();
  return (
    <>
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
    </>
  );
}

export default Header;
