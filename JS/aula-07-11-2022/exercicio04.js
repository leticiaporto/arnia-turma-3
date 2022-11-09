const io = require('../io-lib/io')

function reverter(texto) {
    const invertida = []
    
    for (let i = 0; i < texto.length; i++) {
        invertida.unshift(texto[i])
    }

    return invertida.toString().replaceAll(',', '')
}

const array = reverter('leticia')
io.write(array)