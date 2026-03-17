import API from "../utils/api"

export const getTasks = async()=>{
    const res = await API.get("/tasks")
    return res.data
}

export const createTask = async(data)=>{
    const res = await API.post("/tasks",data)
    return res.data
}

export const updateTask = async(id,data)=>{
    const res = await API.put(`/tasks/${id}`,data)
    return res.data
}

export const deleteTask = async(id)=>{
    const res = await API.delete(`/tasks/${id}`)
    return res.data
}

export const completeTask = async(id)=>{
    const res = await API.patch(`/tasks/${id}/complete`)
    return res.data
}

export const getTasksByDate = async(date)=>{
    const res = await API.get(`/tasks/date/${date}`)
    return res.data
}