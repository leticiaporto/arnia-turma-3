const io = require('../../io-lib/io')

io.write('Digite os anos:')
const anos = io.readInt()
io.write('Digite os meses:')
const meses = io.readInt()
io.write('Digite os dias:')
const dias = io.readInt()

const idadeEmDias = (anos * 365) + (meses * 30) + dias

io.write('A idade em dias é: ' + idadeEmDias)