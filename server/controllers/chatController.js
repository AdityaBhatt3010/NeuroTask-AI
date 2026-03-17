import Task from "../models/Task.js"
import ollama from "../config/ollama.js"

export const chat = async (req, res) => {

  try {

    const { message } = req.body

    const tasks = await Task.find({ userId: req.user })

    const taskList = tasks.length
      ? tasks.map(t =>
        `${t.title} | Priority:${t.priority} | Status:${t.status}`
      ).join("\n")
      : "User currently has no tasks."

    const prompt = `
You are a productivity assistant.

User tasks:
${taskList}

User question:
${message}

Respond clearly and helpfully.
`

    const response = await ollama.chat({
      model: "llama3",
      messages: [
        { role: "user", content: prompt }
      ]
    })

    res.json({
      reply: response.message.content
    })

  } catch (error) {

    console.error("OLLAMA ERROR:", error)

    res.status(500).json({
      error: "AI response failed"
    })

  }

}