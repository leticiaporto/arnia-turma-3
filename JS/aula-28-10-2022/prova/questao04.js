const io = require('../../io-lib/io')

let numero
let i = 1
let divisores = 0

io.write('Digite um número: ')
numero = io.readInt();

while (i <= numero) {

    if (numero % i === 0) {
        divisores = divisores + 1
    }

    i++
}

if(divisores === 2)
    io.write('Primo!')
else
    io.write('Não primo!')