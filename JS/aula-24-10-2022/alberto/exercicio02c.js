const io = require('../../io-lib/io')

let a = 10
let b = 20
let c = a
b = c
a = b
io.write('Valor de A: ' + a)
io.write('Valor de B: ' + b)
io.write('Valor de C: ' + c)