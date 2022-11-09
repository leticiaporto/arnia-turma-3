const personagens = require("./personagens.json")

const vivos = personagens.filter(function(personagem) {
    return personagem.status === 'Alive'
})

console.log(vivos)

