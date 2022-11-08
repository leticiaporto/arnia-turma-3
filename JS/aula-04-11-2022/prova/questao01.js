const io = require('../../io-lib/io')

let arrayProdutos = []
let valorNegativo = false
let maiores500 = 0
let maiores500Array = []
let todosMaiores199
let algumMaior1000

while (valorNegativo === false) {
    io.write('Digite um preço:')
    const preco = io.readFloat()

    if (preco > 0) {
        arrayProdutos.push(preco)
    } else {
        valorNegativo = true
    }
}

io.write(arrayProdutos)

/* LETRA A */
arrayProdutos.forEach(function(elemento) {
    if (elemento > 500) {
        maiores500++
    }
})

io.write('Quantidade de produtos que custam mais que R$500.00: ' + maiores500)

/* LETRA B */
maiores500Array = arrayProdutos.filter(function(elemento) {
    return elemento > 500 ? true : false
})

io.write('Produtos que custam mais que R$500.00: ' + maiores500Array)

/* LETRA C */
todosMaiores199 = arrayProdutos.every(function(elemento) {
    return elemento > 1.99
})

io.write('Todos os produtos são maiores que R$ 1.99? ' + todosMaiores199)

/* LETRA D */
algumMaior1000 = arrayProdutos.some(function(elemento) {
    return elemento > 1000
})

io.write('Algum produto custa mais que R$ 1000? ' + algumMaior1000)