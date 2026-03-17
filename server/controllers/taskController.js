import Task from "../models/Task.js"

export const createTask = async(req,res)=>{

    const task = await Task.create({
        ...req.body,
        userId:req.user
    })

    res.json(task)
}

export const getTasks = async(req,res)=>{

    const tasks = await Task.find({userId:req.user})

    res.json(tasks)
}

export const getTasksByDate = async(req,res)=>{

    const date = new Date(req.params.date)

    const nextDay = new Date(date)
    nextDay.setDate(nextDay.getDate()+1)

    const tasks = await Task.find({
        userId:req.user,
        dueDate:{
            $gte:date,
            $lt:nextDay
        }
    })

    res.json(tasks)
}

export const updateTask = async(req,res)=>{

    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )

    res.json(task)
}

export const deleteTask = async(req,res)=>{

    await Task.findByIdAndDelete(req.params.id)

    res.json({message:"Task deleted"})
}

export const completeTask = async(req,res)=>{

    const task = await Task.findByIdAndUpdate(
        req.params.id,
        {status:"Completed"},
        {new:true}
    )

    res.json(task)
}