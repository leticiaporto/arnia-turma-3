const io = require('../io-lib/io')

function calculaVolume(r) {
    const volume = (4 / 3) * 3.14 * (r ** 3)
    return volume
}

io.write('Digite o valor do raio')
const raio = io.readFloat()
const resultado = calculaVolume(raio)
io.write('O valor do volume é: ' + resultado)