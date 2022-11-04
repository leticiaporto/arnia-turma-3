const io = require('../io-lib/io')

function transformaTexto(array) {
    array = array.map(function (elemento) {
        return elemento.toString()
    })

    io.write(array)
}

const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]
transformaTexto(vetor)