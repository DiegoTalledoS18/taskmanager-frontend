export default function TaskItem({ task }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px"
        }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Estado:</strong> {task.completed ? "✔ Completada" : "Pendiente"}</p>
        </div>
    );
}
