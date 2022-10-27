const io = require('../../io-lib/io')

let a = 10
let b = a + 1
a = b + 1
b = a + 1
io.write('Valor de A: ' + a)
a = b + 1
io.write('Valor de A: ' + a)
io.write('Valor de B: ' + b)