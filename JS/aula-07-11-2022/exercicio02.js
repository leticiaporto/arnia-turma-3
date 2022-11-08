const io = require('../io-lib/io')

function arredondar(numero) {
    const numeroArredondado = numero.toFixed(2).toString()
    const valorEmReal = numeroArredondado.replace('.', ',')

    return 'R$' + valorEmReal
}

const numero = arredondar(5.375)
io.write(numero)