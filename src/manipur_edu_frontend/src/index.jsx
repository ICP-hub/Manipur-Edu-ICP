import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../assets/main.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import { QueryClient, QueryClientProvider } from "react-query";
import store from "../Redux/Store";
import { Provider } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
