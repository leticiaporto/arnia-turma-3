const io = require('../io-lib/io')

function retornaImpares(texto) {
    const arrayTexto = texto.split('')
    io.write(arrayTexto)
    return arrayTexto.filter(function (elemento, index) {
        return index % 2 !== 0
    })
}

const array = retornaImpares('leticia')
io.write(array)