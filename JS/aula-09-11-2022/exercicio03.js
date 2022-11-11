const io = require('../io-lib/io')

let arrayProdutos = []
let valorNegativo = false

while (valorNegativo === false) {
    io.write('Digite um nome:')
    const nome = io.read()
    io.write('Digite um preço:')
    const preco = io.readFloat()

    if (preco > 0) {
        io.write('Digite a quantidade em estoque:')
        const estoque = io.readInt()
        
        arrayProdutos.push({
            nome,
            preco,
            estoque,
        })
    } else {
        valorNegativo = true
    }
}

io.write(arrayProdutos)