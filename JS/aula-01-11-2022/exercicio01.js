const io = require('../io-lib/io')

function funcaoNumeros(arrayNumeros) {
    io.write(arrayNumeros)
    let somaDosPares = 0
    let i = 0
    const numerosImpares = arrayNumeros.filter(function (numero) {
        if (numero % 2 !== 0) {
            return true
        }
        return false
    })

    arrayNumeros.forEach(function (numero) {
        if(numero % 2 === 0) {
            somaDosPares = somaDosPares + numero
        }
    })

    io.write(numerosImpares)
    io.write(somaDosPares)

    while(i < somaDosPares) {
        io.write('Javascript é muito bom')
        i++
    }
}

const numeros = [1, 2, 3, 4, 5]
funcaoNumeros(numeros)