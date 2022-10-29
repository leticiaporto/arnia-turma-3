const io = require('../../io-lib/io')

io.write('Insira o custo do carro:')
const custo = io.readFloat()

const valorDistribuidor = custo * (28 / 100)
const valorImpostos = custo * (45 / 100)
const custoTotal = custo + valorDistribuidor + valorImpostos

io.write('Custo total ' + custoTotal)