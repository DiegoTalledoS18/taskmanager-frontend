import TaskForm from "../components/TaskForm";
import { taskService } from "../services/taskService";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./TaskCreatePage.css"


export default function TaskCreatePage() {
    const navigate = useNavigate();

    const initialValues = {
        title: "",
        description: "",
        completed: false,
    };

    const handleSubmit = async (formData) => {
        try {
            await taskService.createTask(formData);
            navigate("/"); // redirige al listado
        } catch (err) {
            console.error("Error creando tarea", err);
        }
    };

    return (
        <div>
            <h1>Create Task</h1>
            <TaskForm initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
    );
}
