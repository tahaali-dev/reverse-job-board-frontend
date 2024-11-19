import { useRouter } from "next/navigation";
import React from "react";

interface UserHeaderProps {
  currentUrl: string;
}

const UserHeader: React.FC<UserHeaderProps> = ({ currentUrl }) => {
  const router = useRouter();
  return (
    <>
      <header className="bg-white border-b">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded "></div>
            <h1
              className="text-xl font-bold cursor-pointer"
              onClick={() => {
                router.push("/user/dashboard");
              }}
            >
              DataJobs
            </h1>
          </div>
          <div className="flex gap-4">
            {currentUrl !== "/user/makeProfile" && (
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => {
                  router.push("/user/makeProfile");
                }}
              >
                Post Your Profile
              </button>
            )}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={() => {
                router.push("/home");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;
