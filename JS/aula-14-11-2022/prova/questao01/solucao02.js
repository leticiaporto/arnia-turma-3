const io = require('../../io-lib/io')

class Contato {
    nome
    sobrenome
    email
    telefone

    constructor(nome, sobrenome, email, telefone) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.telefone = telefone
    }
}

class Agenda {
    lista

    constructor() {
        this.lista = []
    }

    adicionarContato(contato) {
        this.lista.push(contato)
    }
    
    removerContato(nome) {
        const index = this.lista.findIndex(function (contato) {
            return contato.nome === nome
        })
        if (index !== -1) {
            this.lista.splice(index, 1)
        } else {
            io.write('Elemento não encontrado!')
        }
    }
    
    mostrarContatos() {
        io.write(this.lista)
    }
    
    buscarContato(nome) {
        const arrayFiltrado = this.lista.filter(function (contato) {
            return contato.nome === nome
        })
        io.write(arrayFiltrado)
    }
}

const agenda = new Agenda()
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

    const contato = new Contato(nome, sobrenome, email, telefone)

    agenda.adicionarContato(contato)

    contador++
}

agenda.mostrarContatos()
agenda.buscarContato('Leticia')
agenda.removerContato('Leticia')
agenda.mostrarContatos()