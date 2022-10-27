const io = require('../../io-lib/io')

let a = 10
let b = 5
c = a + b
b = 20
a = 10
io.write('Valor de A: ' + a)
io.write('Valor de B: ' + b)
io.write('Valor de C: ' + c)