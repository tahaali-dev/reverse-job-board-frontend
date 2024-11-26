import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

// Register a user --
async function userRegister(userData: Record<string, any>) {
  try {
    const response = await axiosInstance.post(`/api/auth/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Ensure your API returns useful data
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Handle axios-specific errors
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while registering the user"
      );
    } else {
      // Fallback for unexpected errors
      throw new Error(error.message || "An unknown error occurred");
    }
  }
}

// Custom hook for user registration
export function useUserRegister() {
  // const queryClient = useQueryClient();

  return useMutation(
    (userData: Record<string, any>) => userRegister(userData),
    {
      // onSuccess: () => {
      //   queryClient.invalidateQueries("user-register");
      // },
      onError: (error: any) => {
        console.error("Error during user registration:", error.message);
      },
    }
  );
}

// Login a user --
async function userLogin(userData: Record<string, any>) {
  try {
    const response = await axiosInstance.post(`/api/auth/login`, userData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Ensure your API returns useful data
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Handle axios-specific errors
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while registering the user"
      );
    } else {
      // Fallback for unexpected errors
      throw new Error(error.message || "An unknown error occurred");
    }
  }
}

// Custom hook for user registration
export function useUserLogin() {
  // const queryClient = useQueryClient();

  return useMutation((userData: Record<string, any>) => userLogin(userData), {
    // onSuccess: () => {
    //   queryClient.invalidateQueries("user-register");
    // },
    onError: (error: any) => {
      console.error("Error during user registration:", error.message);
    },
  });
}

export const logout = async () => {
  try {
    await axiosInstance.post(`/api/auth/logout`, {}, { withCredentials: true });
    window.location.href = "/login";
  } catch (error: any) {
    console.error(
      "Error during logout:",
      error.response?.data || error.message
    );
  }
};

// Refresh access token
const refreshAccessToken = async () => {
  try {
    await axiosInstance.post(
      `/api/auth/refresh-token`,
      {},
      { withCredentials: true }
    );
  } catch {
    window.location.href = "/login";
  }
};

// setInterval(refreshAccessToken, 10 * 1000); // Refresh every 10 seconds

// verify user is logged in --
export const useAuth = async () => {
  const data = await axiosInstance.get("/api/auth/session").then(({ data }) => {
    if (!data.loggedIn) {
      window.location.href = "/login";
    }
  });
};
