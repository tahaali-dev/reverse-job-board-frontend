"use client";
import { ReactNode, FC, useEffect } from "react";
import { useAuth, refreshAccessToken } from "../../../ReactQuery/authServices";

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({ children }) => {
  useEffect(() => {
    useAuth();

    const interval = setInterval(() => {
      refreshAccessToken();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);
  return <>{children}</>;
};

export default ProtectedLayout;
