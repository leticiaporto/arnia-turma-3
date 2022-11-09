const personagens = require("./personagens.json")

const apelidos = personagens.map(function(personagem) {
    return personagem.nickname
}) 

console.log(apelidos)