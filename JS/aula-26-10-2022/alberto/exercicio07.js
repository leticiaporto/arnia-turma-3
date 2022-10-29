const io = require('../../io-lib/io')

io.write('Insira o valor da mercadoria:')
const valorMercadoria = io.readFloat()

const resto = valorMercadoria % 3
const valorInteiro = valorMercadoria - resto
const parcela = valorInteiro / 3
const entrada = parcela + resto

io.write('Entrada: ' + entrada)
io.write('Parcelas: 2x de ' + parcela)

/*
    Outra solução
    
    const parcela = valorMercadoria / 3
    const parcelaInt = Math.floor(parcela) //ou parseInt(parcela)
    const entrada = valorMercadoria - (2 * parcelaInt)
    io.write('Entrada: ' + entrada)
    io.write('Parcelas: 2x de ' + parcela)
*/

