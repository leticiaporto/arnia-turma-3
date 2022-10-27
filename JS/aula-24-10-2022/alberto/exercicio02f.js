const io = require('../../io-lib/io')

let x = 1
let y = 2
z = y - x
io.write('Valor de Z: ' + z)
x = 5
y = x + z
io.write('Valor de X: ' + x)
io.write('Valor de Y: ' + y)
io.write('Valor de Z: ' + z)