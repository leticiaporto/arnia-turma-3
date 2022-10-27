const io = require('../../io-lib/io')

let a = 30
let b = 20
let c = a + b
io.write('Valor de C: ' + c)

b = 10
io.write('Valor de B: ' + b)
io.write('Valor de C: ' + c)

c = a + b
io.write('Valor de A: ' + a)
io.write('Valor de B: ' + b)
io.write('Valor de C: ' + c)