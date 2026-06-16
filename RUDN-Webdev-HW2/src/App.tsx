import { BrowserRouter, Routes, Route } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TaskPage from "./pages/TaskPage";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route path="/create" element={<CreateTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;