const io = require('../io-lib/io')

io.write('Digite um número:')
const numero = io.readInt()

if (numero === 1) {
    io.write('Domingo')
} else if (numero === 2) {
    io.write('Segunda')
} else if (numero === 3) {
    io.write('Terça')
} else if (numero === 4) {
    io.write('Quarta')
} else if (numero === 5) {
    io.write('Quinta')
} else if (numero === 6) {
    io.write('Sexta')
} else if (numero === 7) {
    io.write('Sábado')
} else {
    io.write('Valor inválido')
}