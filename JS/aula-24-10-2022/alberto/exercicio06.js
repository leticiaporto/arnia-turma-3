const io = require('../../io-lib/io')

io.write('Digite o total de eleitores:')
const total = io.readInt()
io.write('Digite o número de votos brancos:')
const brancos = io.readFloat()
io.write('Digite o número de votos nulos:')
const nulos = io.readFloat()
io.write('Digite o número de votos validos:')
const validos = io.readFloat()

const porcentagemBrancos = (brancos * 100) / total
const porcentagemNulos = (nulos * 100) / total
const  porcentagemValidos = (validos * 100) / total

io.write('Brancos: ' + porcentagemBrancos)
io.write('Nulos: ' + porcentagemNulos)
io.write('Válidos: ' + porcentagemValidos)