import { useState } from "react"
import { loginUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleLogin = async(e)=>{

    e.preventDefault()

    const data = await loginUser({email,password})

    localStorage.setItem("token",data.token)

    navigate("/dashboard")
}

return(

<div>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Login</button>

</form>

</div>

)
}

export default Login