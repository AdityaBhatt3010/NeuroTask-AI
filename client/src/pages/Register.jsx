import { useState } from "react"
import { registerUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleRegister = async(e)=>{

e.preventDefault()

const data = await registerUser({name,email,password})

localStorage.setItem("token",data.token)

navigate("/dashboard")

}

return(

<div>

<h2>Register</h2>

<form onSubmit={handleRegister}>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Register</button>

</form>

</div>

)
}

export default Register