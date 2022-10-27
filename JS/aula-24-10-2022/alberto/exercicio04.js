const io = require('../../io-lib/io')

io.write('Digite a base do triângulo:')
const base = io.readFloat()

io.write('Digite a altura do triângulo:')
const altura = io.readFloat()

const area = base * altura
io.write('A área do triângulo é: ' + area)