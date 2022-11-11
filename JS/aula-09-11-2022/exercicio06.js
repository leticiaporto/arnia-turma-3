const io = require('../io-lib/io')

let arrayProdutos = []
let valorNegativo = false

function atualizaEstoque(produtos, valor) {
    return produtos.map(function(produto) {
        return {
            ...produto,
            estoque: valor,
        }
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

io.write('Digite o novo valor de estoque:')
const valor = io.readInt()
io.write(atualizaEstoque(arrayProdutos, valor))