const io = require('../io-lib/io')

const arrayNomes = []
const arrayPrecos = []

function cadastrarProdutos() {
    let digitouNegativo = false

    while (digitouNegativo === false) {
        io.write('Nome do produto: ')
        const nome = io.read()
        io.write('Preço: ')
        const preco = io.readFloat()

        if (preco >= 0) {
            arrayNomes.push(nome)
            arrayPrecos.push(preco)
        } else {
            digitouNegativo = true
        }
    }
}

let executando = true

while (executando) {
    io.write('----------------------')
    io.write('Digite uma opção')
    io.write('a - Cadastrar produtos')
    io.write('b - Listar produtos')
    io.write('sair - Parar a execução')
    io.write('-----------------------')
    let opcao = io.read()

    if (opcao === 'a') {
        cadastrarProdutos()
    } else if (opcao === 'b') {
        io.write(arrayNomes)
        io.write(arrayPrecos)
    } else if (opcao === 'sair') {
        executando = false
    }
}