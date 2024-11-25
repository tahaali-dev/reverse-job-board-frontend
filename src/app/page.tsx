"use client";
import Home from "./(frontendPages)/home/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./Redux/store";
const queryClient = new QueryClient();
export default function page() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Home />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
