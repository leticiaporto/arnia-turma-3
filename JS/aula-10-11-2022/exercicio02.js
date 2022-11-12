const io = require('../io-lib/io')

class Empregado {
    nome
    sobrenome
    salario

    constructor(nome, sobrenome, salario) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.salario = salario < 0 ? 0 : salario
    }

    getSalario() {
        return this.salario
    }

    atualizaSalario() {
        this.salario = this.salario + (this.salario * 0.10)
    }
}

const empregado1 = new Empregado('Raimundo', 'Fontes', 2000)
const empregado2 = new Empregado('Fernanda', 'Santos', 3000)

io.write(empregado1.getSalario())
io.write(empregado2.getSalario())

empregado1.atualizaSalario()
empregado2.atualizaSalario()

io.write(empregado1.getSalario())
io.write(empregado2.getSalario())