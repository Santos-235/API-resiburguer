const Usuario = require('../Model/Usuario')
const UsuarioDAO = require('../DAO/UsuarioDAO')

const usuario = (app, bd) => {
    const novoUsuarioDAO = new UsuarioDAO(bd)

    app.get('/usuarios', async (req, res) => {
        
        try {            
            const resposta = await novoUsuarioDAO.pegaTodosUsuarios()
            res.json(resposta)
    } catch(error) {

        res.status(404).json(error)
    }
    })

    app.get('/usuario/:email', async (req, res) => {
        const email = req.params.email

        try {
            const resposta = await novoUsuarioDAO.pegaUsuarioEmail(email)
            res.json(resposta)
        } catch(error) {
            res.status(404).json(error)
        }
    })

   
    app.post('/usuario', async (req, res) => {       
        try {
            const body = req.body
            const novoUsuario = new Usuario(body.nome, body.email, body.tel, body.senha)

            const resposta = await novoUsuarioDAO.registraUsuario(novoUsuario)
            res.json(resposta)
            

        } catch (error) {
            res.json({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    })


    app.put('/usuario/:id', async (req, res) => {
        console.log("Atualizando Usuario")
        const id = req.params.id
        const body = req.body

        try {
            
            const resp = await novoUsuarioDAO.pegaIdUsuario(id)
            const usuarioAntigo = resp.requisicao[0]

            if(usuarioAntigo) {                
                const usuarioAtualizado = new Usuario(
                    body.nome || usuarioAntigo.NOME,                    
                    body.email || usuarioAntigo.EMAIL,
                    body.tel || usuarioAntigo.TEL,
                    body.senha || usuarioAntigo.SENHA
                    ) 

                    const resposta = await novoUsuarioDAO.atualizaUsuario(id, usuarioAtualizado)
                    res.json(resposta)
            } else {
                res.json({
                    "mensagem" : `Usuario não foi encontrado`,
                    "error" : true
                })
            }
        } catch(error) {
            res.json({
                "mensagem" : error.message,
                "error" : true
            })
        }
    })


    app.delete('/usuario/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            const resposta = await novoUsuarioDAO.apagaUsuario(id)
            res.json(resposta)
        } catch(error) {
            res.status(404).json({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    })
}




module.exports = usuario