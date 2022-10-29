const io = require('../../io-lib/io')


io.write('Insira a nota 1:')
const n1 = io.readFloat()
io.write('Insira a nota 2:')
const n2 = io.readFloat()
io.write('Insira a nota 3:')
const n3 = io.readFloat()

const media = (n1 + n2 + n3) / 3
io.write('A média é: ' + media)