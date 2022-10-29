const io = require('../io-lib/io')

io.write('Digite um número:')
const numero = io.readInt()

if (numero > 0 && numero < 10) {
    io.write('Esse número é maior que 0 e menor que 10.')
} else {
    io.write('Esse número não é maior que 0 e nem menor que 10.')
}