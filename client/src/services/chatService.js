import API from "../utils/api"

export const askAI = async(message)=>{

    const res = await API.post("/chat",{
        message
    })

    return res.data
}