const io = require('../io-lib/io')

let a
let b
let c
let delta
let raiz1
let raiz2

io.write('Digite o valor de a: ')
a = io.readInt()

io.write('Digite o valor de b: ')
b = io.readInt()

io.write('Digite o valor de c: ')
c = io.readInt()

delta = (b * b) - (4 * a * c)

io.write('O valor de Delta é: ')
io.write(delta)

if (delta < 0) {
    io.write('Não existe solução real.')
} else if (delta >= 0) {
    raiz1 = (-(b) + (delta ** 0.5)) / (2 * a)
    io.write('A 1ª raiz é: ')
    io.write(raiz1)

    if (delta > 0) {
        raiz2 = (-(b) - (delta ** 0.5)) / (2 * a)
        io.write('A 2ª raiz é: ')
        io.write(raiz1)
    }
}