const io = require('../io-lib/io')

class Empregado {
    nome
    salario

    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario < 0 ? 0 : salario
    }
}

class Gerente extends Empregado {
    departamento

    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.departamento = departamento
    }
}

class Vendedor extends Empregado {
    comissao

    constructor(nome, salario, comissao) {
        super(nome, salario)
        this.comissao = comissao
    }

    calcularSalario(vendas) {
        return this.salario + (vendas * this.comissao)
    }
}


const empregado = new Empregado('Messias', 2000)
const gerente = new Gerente('Mariana', 6000, 'Departamento A')
const vendedor = new Vendedor('Celso', 2500, 0.10)
io.write(empregado)
io.write(gerente)
io.write(vendedor)
// diferente do enunciado da questão, considerem aqui que estamos enviando o valor total das vendas
io.write(vendedor.calcularSalario(10000))