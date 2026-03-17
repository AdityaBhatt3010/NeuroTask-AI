import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from 'dotenv';

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
  model: "gemini-3.1-pro-preview"
})

export default model