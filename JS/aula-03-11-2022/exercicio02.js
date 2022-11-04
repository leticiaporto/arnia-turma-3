const io = require('../io-lib/io')

const array = [3, 5, 6, 2, 1, 6, 9]
const arrayReverso = []

array.map(function(elemento) {
    arrayReverso.unshift(elemento)
})

io.write(arrayReverso)
