const io = require('../io-lib/io')

let arrayProdutos = []
let valorNegativo = false

function relatorio(produtos) {
    const menos5 = produtos.filter(function (produto) {
        return produto.estoque < 5
    })

    const mais30 = produtos.filter(function (produto) {
        return produto.estoque > 30
    })

    const maior1000 = produtos.filter(function (produto) {
        return produto.preco > 1000
    })

    return {
        qtdProdutosAcabando: menos5.length,
        qtdProdutosExcesso: mais30.length,
        produtosAltoRetorno: maior1000,
    }
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
io.write(relatorio(arrayProdutos))