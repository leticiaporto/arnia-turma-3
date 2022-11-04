const io = require('../io-lib/io')

const vetor = []
let i = 0

while (i < 5) {
    io.write('Digite um numero')
    const elemento = io.readInt()
    vetor.push(elemento)
    i++
}

io.write(vetor)

const saoPares = vetor.every(function(elemento) {
    if(elemento % 2 === 0) {
        return true
    }
    return false
})

io.write('Pares: ' + saoPares)

const maior50 = vetor.some(function(elemento) {
    if(elemento > 50) {
        return true
    }
    return false
})

io.write('Algum é maior que 50? ' + maior50)

const arrayComDesconto = vetor.map(function(elemento) {
    return elemento - (elemento * (15/100))
})

io.write('Valores com desconto: ' + arrayComDesconto)

const divisiveis3 = vetor.filter(function(elemento) {
    if(elemento % 3 === 0) {
        return true
    }
    return false
})

io.write('Elementos divisíveis por 3: ' + divisiveis3)