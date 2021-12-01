var id = 0

class Usuario {
    constructor(nome, email, tel, senha, array, idExistente) {
        if(array){
            if(idExistente) {
                this.id = idExistente
            } else {
                this.id = id++
            }
        }
        this.nome = nome        
        this.email = email
        this.tel = tel
        this.senha = this._verificaSenha(senha)  
    }

    _verificaSenha(senha) {
        if(senha.length >= 6) {
            return senha
        } else {
            throw new Error("A senha precisa ser maior que 6 dígitos")
        }
    }
   
}




module.exports = Usuario