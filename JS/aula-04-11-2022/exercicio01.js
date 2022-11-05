const io = require('../io-lib/io')

let arrayNomes = []
let arrayPrecos = []
let executando = true

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

function listarProdutos() {
    io.write('Lista de produtos:')
    for (let i = 0; i < arrayNomes.length; i++) {
        io.write(arrayNomes[i] + ' - R$ ' + arrayPrecos[i])
    }
}

function pesquisarProduto() {
    io.write('Digite um nome:')
    const nome = io.read()
    const nomeEncontrado = arrayNomes.find(function (elemento) {
        return elemento === nome
    })

    if (nomeEncontrado) {
        io.write('Produto existe no estoque!')
    } else {
        io.write('Produto não existe no estoque!')
    }
}

function mostrarPrecosMaiores() {
    io.write('Digite um valor:')
    const valor = io.readFloat()

    const precosMaiores = arrayPrecos.filter(function (elemento) {
        return elemento > valor
    })

    io.write('Preços maiores que ' + valor)
    io.write(precosMaiores)
}

function mostrarPrecosMenores() {
    io.write('Digite um valor:')
    const valor = io.readFloat()

    const precosMenores = arrayPrecos.filter(function (elemento) {
        return elemento < valor
    })

    io.write('Preços menores que ' + valor)
    io.write(precosMenores)
}

function calcularMedia() {
    const soma = arrayPrecos.reduce(function (acumulador, elemento) {
        return acumulador + elemento
    }, 0)
    const media = soma / arrayPrecos.length

    io.write('A média é: ' + media)
}

function atualizarValores() {
    io.write('Digite a procentagem (12 para aumentar ou 10 para diminuir):')
    const valor = io.readFloat()

    if (valor === 12) {
        arrayPrecos = arrayPrecos.map(function (elemento) {
            return elemento + (elemento * 0.12)
        })
        io.write('Valores atualizados com sucesso!')
    } else if (valor === 10) {
        arrayPrecos = arrayPrecos.map(function (elemento) {
            return elemento - (elemento * 0.10)
        })
        io.write('Valores atualizados com sucesso!')
    } else {
        io.write('Os valores não foram atualizados.')
    }
}

function removerProduto() {
    io.write('Digite um nome:')
    const nome = io.read()
    /* 
        Nesse caso é necessário encontrar a posição para efetuar a remoção dos dois arrays (o de nome e o de preço). Para isso, usa-se o "findIndex".
        Busca-se a posição do elemento com o nome igual ao digitado pelo usuário.
    */
    const posicao = arrayNomes.findIndex(function (elemento) {
        return elemento === nome
    })

    if (posicao === -1) {
        io.write('Produto não encontrado.')
    } else {
        /* 
            Para remover usamos o "filter": filtramos para manter no array somente os elementos com posição diferente da encontrada na linha 100.
            Incluímos o parâmetro "index" no "filter". Ele representa a posição do elemento que está sendo acessado naquele momento.
        */
        arrayNomes = arrayNomes.filter(function (elemento, index) {
            return index !== posicao
        })
        arrayPrecos = arrayPrecos.filter(function (elemento, index) {
            return index !== posicao
        })


        io.write('Produto removido com sucesso!')
    }
}

while (executando) {
    io.write('----------------------')
    io.write('Digite uma opção')
    io.write('a - Cadastrar produtos')
    io.write('b - Listar produtos')
    io.write('c - Pesquisar produto')
    io.write('d - Preços maiores que um valor')
    io.write('e - Preços menores que um valor')
    io.write('f - Média dos valores dos produtos')
    io.write('g - Atualizar valores')
    io.write('h - Remover Produto')
    io.write('sair - Parar a execução')
    io.write('-----------------------')
    let opcao = io.read()

    if (opcao === 'a') {
        cadastrarProdutos()
    } else if (opcao === 'b') {
        listarProdutos()
    } else if (opcao === 'c') {
        pesquisarProduto()
    } else if (opcao === 'd') {
        mostrarPrecosMaiores()
    } else if (opcao === 'e') {
        mostrarPrecosMenores()
    } else if (opcao === 'f') {
        calcularMedia()
    } else if (opcao === 'g') {
        atualizarValores()
    } else if (opcao === 'h') {
        removerProduto()
    } else if (opcao === 'sair') {
        executando = false
    }
}