import { logout } from "@/ReactQuery/authServices";
import { useRouter } from "next/navigation";
import React from "react";

interface UserHeaderProps {
  currentUrl: string;
}

const DashboardHeader: React.FC<UserHeaderProps> = ({ currentUrl }) => {
  const router = useRouter();
  const user = localStorage.getItem("user");

  return (
    <>
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
            {user === "jobSeeker" && currentUrl !== "/makeProfile" && (
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => {
                  router.push("/makeProfile");
                }}
              >
                Post Your Profile
              </button>
            )}

            {user === "employer" && (
              <>
                <button
                  className="border px-4 py-2 rounded-md hover:bg-slate-50"
                  onClick={() => {
                    router.push("#");
                  }}
                >
                  Data Scientist
                </button>

                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => {
                    router.push("#");
                  }}
                >
                  Subscription
                </button>
              </>
            )}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={() => {
                logout();
                // router.push("/home");
                // localStorage.removeItem("at");
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

export default DashboardHeader;
