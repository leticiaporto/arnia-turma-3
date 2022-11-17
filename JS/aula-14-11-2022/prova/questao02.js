const io = require('../../io-lib/io')

function compararString(string1, string2) {
    let ehIgual = true
    const arrayString1 = string1.toLowerCase().split('')
    const arrayString2 = string2.toLowerCase().split('')
    io.write(arrayString1)
    io.write(arrayString2)

    arrayString1.forEach(function (elemento) {
        if (!arrayString2.includes(elemento)) {
            ehIgual = false
        }
    })

    arrayString2.forEach(function (elemento) {
        if (!arrayString1.includes(elemento)) {
            ehIgual = false
        }
    })

    return ehIgual
}

io.write(compararString('leticialeticia', 'letifcia'))