const io = require('../io-lib/io')

function transformaNumeros(array) {
    array = array.map(function (numero) {
        if (numero % 2 === 0) {
            return numero * 3
        }
        return numero * 4
    })

    io.write(array)

    array = array.filter(function (numero) {
        if (numero < 100) {
            return true
        }
        return false
    })

    io.write(array)
}

const vetor = [2, 4, 1000, 40, 340, 501, 500, 1093, 245, 21]
transformaNumeros(vetor)