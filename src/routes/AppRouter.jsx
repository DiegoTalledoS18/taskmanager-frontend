import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskListPage from "../features/tasks/pages/TaskListPage";
import TaskCreatePage from "../features/tasks/pages/TaskCreatePage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TaskListPage />} />
                <Route path="/tasks/create" element={<TaskCreatePage />} />
            </Routes>
        </BrowserRouter>
    );
}
