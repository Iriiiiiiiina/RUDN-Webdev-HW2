import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import { CssBaseline } from "@mui/material";

import { TasksProvider } from "./context/TasksContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <TasksProvider>
      <CssBaseline />
      <App />
    </TasksProvider>
  </QueryClientProvider>
);