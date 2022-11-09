const io = require('../io-lib/io')

function verificarCaracteresDiferentes(texto1, texto2) {
    const caracteresDiferentes = []
    for (let i = 0; i < texto1.length; i++) {
        const caracter = texto1[i]
        if (!texto2.includes(caracter) && !caracteresDiferentes.find(elemento => elemento === caracter)) {
            caracteresDiferentes.push(caracter)
        }
    }

    for (let i = 0; i < texto2.length; i++) {
        const caracter = texto2[i]
        if (!texto1.includes(caracter) && !caracteresDiferentes.find(elemento => elemento === caracter)) {
            caracteresDiferentes.push(caracter)
        }
    }

    return caracteresDiferentes
}

const array = verificarCaracteresDiferentes('leticia', 'porto')
io.write(array)