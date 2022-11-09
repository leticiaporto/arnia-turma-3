const io = require('../io-lib/io')

function inverterPalavras(frase) {
    const palavras = frase.split(' ')
    const palavrasInvertidas = []
    
    for (let i = 0; i < palavras.length; i++) {
        palavrasInvertidas.unshift(palavras[i])
    }

    return palavrasInvertidas.toString().replaceAll(',', '')
}

const array = inverterPalavras('leticia porto soares')
io.write(array)