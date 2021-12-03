// const db = require('./bd')


// const USUARIO_SCHEMA = `CREATE TABLE IF NOT EXISTS "USUARIO" (
//     "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
//     "NOME_COMPLETO" varchar(64),
//     "ENDERECO" REAL,
//     "CELULAR" INTEGER,
//     "E_MAIL" INTEGER,
//     "OBSERVACAO" varchar(255)
//   );`


//   const ADD_USUARIO_DATA = 
//   `INSERT INTO USUARIO  (ID, NOME_COMPLETO, ENDERECO, CELULAR, E_MAIL, OBSERVACAO)
//   VALUES (1, 'VITOR SANTOS', 'RUA1', '33333333', 'VITOR@VITOR', 'NENHUMA')`
  

//   function criaTabela() {
//     db.run(USUARIO_SCHEMA, (error)=> {
//        if (error) console.log(error.message);
//     });
// }


// function populaTabela() {
//     db.run(ADD_USUARIO_DATA, (error)=> {
//        if (error) console.log(error.message);
//     });
// }

// db.serialize(()=> {
//   criaTabela(),
//   populaTabela()
// });

const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq)



const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(70),    
    "EMAIL" varchar(70),
    "ENDEREÇO" varchar(70),
    "TEL" varchar(70),
    "SENHA" varchar(15)
)`

const ADD_USUARIO_TESTE = `
INSERT INTO USUARIOS (ID, NOME, EMAIL, TEL, SENHA)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br','7158 - 5555', 'rua dos alfinetes, 1', '*******'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', 'rua dos alfinetes, 2', '7185 - 6666', '********'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', 'rua dos alfinetes, 3', '7184 - 4444', '********')    
`

function criaTabelaUsuarios() {
    db.run(USUARIOS_SCHEMA, (error) => {
       if (error) console.log("Não foi possível criar tabela")
    })
}

function insereRegistros() {
    db.run(ADD_USUARIO_TESTE, (error)=> {
       if (error) console.log("Não foi possível inserir registros na tabela")
    })
}

db.serialize(() => {
    criaTabelaUsuarios();
    insereRegistros();
})




