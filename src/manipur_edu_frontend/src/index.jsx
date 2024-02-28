




import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../assets/main.css"
import UserTypeProvider from "./utils/UserTypeProvider";
import UserDataProvider from "./utils/UserDataProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  }
})
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserTypeProvider>


        <App />


      </UserTypeProvider>
    </QueryClientProvider>

  </React.StrictMode>
);