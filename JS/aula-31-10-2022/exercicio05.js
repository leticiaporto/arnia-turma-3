const io = require('../io-lib/io')

function ehPar(valor) {
    if (valor % 2) {
        return true
    }
    return false
}

const resultado = ehPar(7)
if (resultado) {
    io.write('O número é par.')
} else {
    io.write('O número é ímpar.')
}