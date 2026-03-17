import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  getTasks,
  createTask,
  deleteTask,
  completeTask,
  getTasksByDate
} from "../services/taskService"

import Chatbot from "../components/Chatbot"

function Dashboard() {

  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [priority, setPriority] = useState("Medium")

  const navigate = useNavigate()

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  const handleCreate = async () => {

    if (!title) return

    await createTask({
      title,
      description,
      priority,
      dueDate
    })

    setTitle("")
    setDescription("")
    setDueDate("")

    loadTasks()
  }

  const handleDelete = async (id) => {
    await deleteTask(id)
    loadTasks()
  }

  const handleComplete = async (id) => {
    await completeTask(id)
    loadTasks()
  }

  const handleDateFilter = async (e) => {

    const selected = e.target.value

    if (!selected) {
      loadTasks()
      return
    }

    const data = await getTasksByDate(selected)

    setTasks(data)
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (

    <div style={{ padding: "40px" }}>

      <h1>DARD Dashboard</h1>

      {/* Navbar */}

      <div style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px"
      }}>

        <input
          type="date"
          onChange={handleDateFilter}
        />

        <button onClick={logout}>
          Logout
        </button>

      </div>

      {/* Create Task */}

      <div style={{
        border: "1px solid gray",
        padding: "20px",
        marginBottom: "30px"
      }}>

        <h3>Create Task</h3>

        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >

          <option>Low</option>
          <option>Medium</option>
          <option>High</option>

        </select>

        <br /><br />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <br /><br />

        <button onClick={handleCreate}>
          Add Task
        </button>

      </div>

      {/* Task List */}

      <h3>Your Tasks</h3>

      {tasks.length === 0 && <p>No tasks found</p>}

      <ul>

        {tasks.map((task) => (

          <li key={task._id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <strong>{task.title}</strong>

            <p>{task.description}</p>

            <p>
              Priority: {task.priority}
            </p>

            <p>
              Status: {task.status}
            </p>

            <p>
              Due: {task.dueDate?.substring(0, 10)}
            </p>

            <button
              onClick={() => handleComplete(task._id)}
            >
              Complete
            </button>

            <button
              onClick={() => handleDelete(task._id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

      {/* Chatbot */}

      <div style={{ marginTop: "40px" }}>
        <Chatbot />
      </div>

    </div>

  )

}

export default Dashboard