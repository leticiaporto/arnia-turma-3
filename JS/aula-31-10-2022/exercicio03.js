const io = require('../io-lib/io')

function calculaIdade(anos, meses, dias) {
    return (anos * 365) + (meses * 30) + dias
}

const resultado = calculaIdade(26, 9, 10)
io.write('A idade em dias é: ' + resultado)