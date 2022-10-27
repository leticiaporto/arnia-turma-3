const io = require('../../io-lib/io')

io.write('Digite um valor:')
const valor = io.readInt()
const antecessor = valor - 1
io.write('O antecessor é: ' + antecessor)