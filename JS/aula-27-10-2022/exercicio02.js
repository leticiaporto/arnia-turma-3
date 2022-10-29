const io = require('../io-lib/io')

io.write('Digite o nome do país:')
const pais = io.read()

if (pais === 'Brasil') {
    io.write('Esse país é o Brasil.')
} else {
    io.write('Esse país não é o Brasil.')
}