const io = require('../io-lib/io')

let num1
let num2

io.write('Digite o 1º valor: ')
num1 = io.readInt()

io.write('Digite o 2º valor: ')
num2 = io.readInt()

if (num1 === num2) {
    io.write('Os números são iguais!')
} else {
    io.write('O número maior é: ')
    if (num1 > num2) {
        io.write(num1)
    } else {
        io.write(num2)
    }
}