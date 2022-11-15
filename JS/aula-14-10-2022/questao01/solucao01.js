const io = require('../../io-lib/io')

const agenda = []

function adicionarContato(contato) {
    agenda.push(contato)
}

function removerContato(nome) {
    const index = agenda.findIndex(function (contato) {
        return contato.nome === nome
    })
    if (index !== -1) {
        agenda.splice(index, 1)
    } else {
        io.write('Elemento não encontrado!')
    }
}

function mostrarContatos() {
    io.write(agenda)
}

function buscarContato(nome) {
    const arrayFiltrado = agenda.filter(function (contato) {
        return contato.nome === nome
    })
    io.write(arrayFiltrado)
}

let contador = 0
while (contador < 2) {
    io.write('Digite o nome:')
    const nome = io.read()
    io.write('Digite o sobrenome:')
    const sobrenome = io.read()
    io.write('Digite o telefone:')
    const telefone = io.read()
    io.write('Digite o email:')
    const email = io.read()

    adicionarContato({
        nome,
        sobrenome,
        telefone,
        email,
    })

    contador++
}

mostrarContatos()
buscarContato('Leticia')
removerContato('Leticia')
mostrarContatos()