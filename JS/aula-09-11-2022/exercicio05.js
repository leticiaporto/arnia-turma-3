const io = require('../io-lib/io')

let arrayProdutos = []
let valorNegativo = false

function buscar(produtos, nomePesquisado) {
    return produtos.filter(function (produto) {
        return produto.nome === nomePesquisado
    })
}

while (valorNegativo === false) {
    io.write('Digite o nome:')
    const nome = io.read()
    io.write('Digite o preço:')
    const preco = io.readFloat()

    if (preco > 0) {
        io.write('Digite a quantidade em estoque:')
        const estoque = io.readInt()

        arrayProdutos.push({
            nome,
            preco,
            estoque
        })
    } else {
        valorNegativo = true
    }
}

io.write(arrayProdutos)

io.write('Digite um nome para pesquisa:')
const pesquisa = io.read()
io.write(buscar(arrayProdutos, pesquisa))