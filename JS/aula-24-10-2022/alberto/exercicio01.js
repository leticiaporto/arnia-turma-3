const io = require('../../io-lib/io')

let a = 10
let b = 20
const auxiliar = a
a = b
b = auxiliar

io.write('Valor de A: ' + a)
io.write('Valor de B: ' + b)