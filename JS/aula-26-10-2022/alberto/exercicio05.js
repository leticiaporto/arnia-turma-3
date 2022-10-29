const io = require('../../io-lib/io')


io.write('Insira o raio:')
const raio = io.readFloat()
io.write('Insira a altura:')
const altura = io.readFloat()

const volume = 3.14 * (raio * raio) * altura
io.write('O volume é: ' + volume)