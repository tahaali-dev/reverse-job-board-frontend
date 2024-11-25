import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

// Register a user --
async function userRegister(userData: Record<string, any>) {
  try {
    const response = await axios.post(
      `${BASEURL}/api/auth/register`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
    const response = await axios.post(`${BASEURL}/api/auth/login`, userData, {
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
