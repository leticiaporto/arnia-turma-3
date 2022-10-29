const io = require('../../io-lib/io')


io.write('Insira a nota 1:')
const n1 = io.readFloat()
io.write('Insira a nota 2:')
const n2 = io.readFloat()
io.write('Insira a nota 3:')
const n3 = io.readFloat()

const media = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10
io.write('A média final é: ' + media)