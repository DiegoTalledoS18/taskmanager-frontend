import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks";

export const taskService = {
    createTask: async (data) => {
        const res = await axios.post(API_URL, data);
        console.log(res.data);
        return res.data;
    },
    getTasks: async () => {
        const res = await axios.get(API_URL);
        return res.data;
    }
};
