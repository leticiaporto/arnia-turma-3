const io = require('../../io-lib/io')

const numero = 2048374

const arrayNumeros = numero.toString().split('')

io.write(arrayNumeros)

const soma = arrayNumeros.reduce(function (acumulador, elemento) {
    return acumulador + parseInt(elemento)
}, 0)

io.write(soma)