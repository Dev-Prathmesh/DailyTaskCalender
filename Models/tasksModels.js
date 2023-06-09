const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        date:{
            type:String,
            required:true,
            default:Date.now().date
        },
        time:{
            type:String,
            required:true,
            default:Date.now().time
        },
        description:{
            type:String,
            required:false,
        }
    }
)

const Task = mongoose.model('Task',taskSchema)
module.exports = Task;