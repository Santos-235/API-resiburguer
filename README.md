# Módulo 4 * Resilia * HAMBURGUERIA RESILIENTE


## Descrevendo a api
Foi proposto ao grupo criar uma API Rest, cada participante fica responsável por uma determinada entidade. Utilizamos habilidades de SoftSkills, realizamos sprints semanais para desenvolver partes do projeto, assim como as entidades que cada participante. Este, entidade USUÁRIO.

## O Projeto
Criar uma API Rest e utilizar o CRUD com os verbos HTTP. Projeto desenvolvido em [NodeJS](https://nodejs.org/en/about/) e libs como [Express](https://expressjs.com/) e [Jest](https://jestjs.io/pt-BR/) para testes unitários. Também utilizaremos o [SQLite3](https://www.npmjs.com/package/sqlite3) como banco de dados da aplicação.


## Inicializando a API
Realize o clone do repositório na sua máquina executando a seguinte linha de código em um terminal:

``` s
git clone https://github.com/Santos-235/API-resiburguer.git
```


Para inicializar a API é necessário que sejam instaladas as dependencias e inicializados o banco de dados e o servidor.

A partir de um terminal siga as instruções abaixo:

Acesse a pasta raiz do projeto.
```
Instale as depêndencias:
``` s
npm install
``` 
Logo após, inicialize o banco de dados:
``` s
npm run database
``` 
Para inicializar o servidor utilize:
``` s
npm start
```
A API funcionará em ``` http://localhost:3003/ ```
Utilize uma plataforma como Insomnia ou Postman para realizar as operações CRUD com verbos HTTP localmente.


## Informações sobre o POST e o PUT
Para inserção ou atualização do usuário insira o registro em formato json contento o campo em letra minúscula assim como no exemplo abaixo:

``` s
{
    "ID": "Num de identificação"
    "nome": "Nome do Usuário",
    "email": "usuario@exemplo.com",
    "endereco": "Rua dos alfinetes, 1",
    "telefone": "0000-000",
    "senha": "12345678"
}

```
Obs: A senha deve conter 8 caracteres.

## Testes
Para tests unitários após ter inicializado o banco de dados rode o seguinte comando a partir de um terminal:

``` s
npm test
```