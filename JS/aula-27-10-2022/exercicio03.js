const io = require('../io-lib/io')

io.write('Digite um número:')
const numero = io.readInt()

if (numero % 2 === 0) {
    io.write('Esse é par.')
} else {
    io.write('Esse é ímpar.')
}