const io = require('../io-lib/io')

function imprimir(usuarios) {
  usuarios.forEach(function (usuario) {
    io.write(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.toString().replaceAll(',', ', ')}`)
  })
}

const usuarios = [{
    nome: "Douglas",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Elton",
    habilidades: ["PHP", "Ruby on Rails", "Laravel"],
  },
]

imprimir(usuarios)