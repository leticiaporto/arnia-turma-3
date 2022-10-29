const io = require('../../io-lib/io')


io.write('Insira a velocidade em m/s:')
const velocidade = io.readFloat()

const velocidadeEmKmH = velocidade * 3.6
io.write('A velocidade em Km/h é :' + velocidadeEmKmH)