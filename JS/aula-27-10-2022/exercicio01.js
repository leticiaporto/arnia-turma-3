const io = require('../io-lib/io')

io.write('Digite um valor:')
const valor = io.readFloat()

if (valor > 100) {
    io.write('O valor é maior que 100.')
} else {
    io.write('O valor é menor ou igual a 100.')
}