const personagens = require("./personagens.json")

const better = personagens.filter(function(personagem) {
    return personagem.category.includes('Better Call Saul')
})

console.log(better, better.length)

