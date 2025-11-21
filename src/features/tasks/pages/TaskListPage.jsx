import { useEffect, useState } from "react";
import { taskService } from "../services/taskService";
import TaskItem from "../components/TaskItem";

export default function TaskListPage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const response = await taskService.getTasks();
            setTasks(response);
        } catch (err) {
            console.error("Error cargando tasks", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <h1>Mis Tareas</h1>

            {tasks.length === 0 ? (
                <p>No hay tareas aún.</p>
            ) : (
                tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))
            )}
        </div>
    );
}
