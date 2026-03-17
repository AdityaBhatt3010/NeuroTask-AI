import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    title:{
        type:String,
        required:true
    },

    description:String,

    priority:{
        type:String,
        enum:["Low","Medium","High"],
        default:"Medium"
    },

    dueDate:Date,

    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending"
    }

},{
    timestamps:true
})

const Task = mongoose.model("Task",taskSchema)

export default Task