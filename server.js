const express = require('express')
const app = express()
const PORT = 5000

app.get('/',(req,res)=>{
    res.send('get route hit')
})

app.listen(PORT,() =>{
    console.log(`Server hosted on http://localhost:${PORT}`)
})