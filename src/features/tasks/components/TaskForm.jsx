import { useState } from "react";
import "./TaskForm.css";
import Button from '@mui/material/Button';


export default function TaskForm({ initialValues, onSubmit }) {
    const [form, setForm] = useState(initialValues);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckbox = (e) => {
        setForm({
            ...form,
            completed: e.target.checked
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form); // enviamos el objeto al padre
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>Descripción:</label>
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={form.completed}
                        onChange={handleCheckbox}
                    />
                    Completada
                </label>
            </div>

            <Button variant="contained" color="primary" type="submit">
                Botón MUI funcionando
            </Button>
        </form>
    );
}
