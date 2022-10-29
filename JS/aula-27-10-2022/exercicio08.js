const io = require('../io-lib/io')

let peso
let altura
let imc

io.write('Digite o seu peso: ')
peso = io.readFloat()

io.write('Digite a sua altura: ')
altura = io.readFloat()

imc = peso / (altura ** 2)

io.write('O seu IMC é: ')
io.write(imc)

if (imc >= 18.5 && imc <= 24.9) {
    io.write('Normal.')
} else if (imc >= 25 && imc < 29.9) {
    io.write('Sobrepeso.')
} else if (imc >= 30 && imc <= 40) {
    io.write('Obesidade.')
} else if (imc > 40) {
    io.write('Obesidade Grave.')
}