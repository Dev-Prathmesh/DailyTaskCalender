require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const Product =require('./Models/tasksModels')
const Task = require('./Models/tasksModels')


app.get('/',(req,res)=>{
    res.send('get route hit')
})

app.listen(PORT,() =>{
    console.log(`Server hosted on http://localhost:${PORT}`)
})
mongoose.set('strictQuery',false)
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) =>console.error(error))
db.once('open', () =>console.log('Connected to Database'))

app.use(express.json())

//GET Request for all task

app.get('/tasks',async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
// GET Request for single task 
app.get('/tasks/:id',async (req,res)=>{
    try {
        const {id} =req.params;
        const task = await Task.findById(id)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//POST Request

app.post('/tasks', async (req,res)=>{
    try {
        const tasks= await Task.create(req.body)
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//PUT Request

app.put('/tasks/:id',async(req,res)=>{
    try {
        const {id} =req.params;
        const task = await Task.findByIdAndUpdate(id, req.body)
        if(!task){
            return res.status(404).json({message:'Cant find the Task in database'})
        }
        const updatedTask = await Task.findById(id);
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({message:error.message})
    }

})

//DELETE Request

app.delete('/tasks/:id', async (req,res)=>{
    try {
        const {id} =req.params;
        const task = await Task.findByIdAndRemove(id);
        if(!task){
            return res.status(404).json({message:'Cant find the Task in database'})
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})