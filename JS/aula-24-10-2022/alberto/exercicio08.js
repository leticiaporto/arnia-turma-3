const io = require('../../io-lib/io')

io.write('Digite a temperatura em Fahrenheit:')
const temperatura = io.readFloat()

const celsius = ((5 * temperatura) - 160) / 9

io.write('A temperatura em Celsius é: ' + celsius)