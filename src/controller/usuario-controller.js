const usuario = (app)=>{
    app.get('/usuario',(req,res)=>{
        res.send('souusuario')
    })
}

module.exports = usuario