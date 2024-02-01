import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      // staleTime: 10 * 1_000,
      // refetchOnWindowFocus: false,
      // refetchOnReconnect: false,
      // refetchOnMount: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
