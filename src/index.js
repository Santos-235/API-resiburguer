const express = require('express')
const app = express()
const port = 3005

app.use(express.json())



app.listen(port, ()=>{
    console.log("rodando")
}) 


