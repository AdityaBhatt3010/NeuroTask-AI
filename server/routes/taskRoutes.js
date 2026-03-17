import express from "express"

import protect from "../middleware/authMiddleware.js"

import {
createTask,
getTasks,
getTasksByDate,
updateTask,
deleteTask,
completeTask
} from "../controllers/taskController.js"

const router = express.Router()

router.post("/",protect,createTask)

router.get("/",protect,getTasks)

router.get("/date/:date",protect,getTasksByDate)

router.put("/:id",protect,updateTask)

router.delete("/:id",protect,deleteTask)

router.patch("/:id/complete",protect,completeTask)

export default router