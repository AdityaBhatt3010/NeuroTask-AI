import { useState } from "react"
import { askAI } from "../services/chatService"

function Chatbot(){

const [message,setMessage] = useState("")
const [reply,setReply] = useState("")

const sendMessage = async()=>{

const res = await askAI(message)

setReply(res.reply)

}

return(

<div>

<h3>AI Assistant</h3>

<input
placeholder="Ask about your tasks..."
onChange={(e)=>setMessage(e.target.value)}
/>

<button onClick={sendMessage}>
Ask
</button>

<p>{reply}</p>

</div>

)
}

export default Chatbot