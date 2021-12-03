const app = require('./app')
const porta = 3003

app.listen(porta, ()=>{
    console.log(`Servidor rodando: http://localhost:${porta}/`)
})