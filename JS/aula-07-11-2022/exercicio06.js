const io = require('../io-lib/io')

const vogais = ['a', 'e', 'i', 'o', 'u']

function quantidadeVogais(texto) {
    const catacteres = texto.replaceAll(' ', '').toLowerCase().split('')
    let quantidade = 0

    for (let i = 0; i < catacteres.length; i++) {
        if (vogais.includes(catacteres[i])) {
            quantidade++
        }
    }

    return quantidade
}

const quantidade = quantidadeVogais('leticia porto soares')
io.write(quantidade)