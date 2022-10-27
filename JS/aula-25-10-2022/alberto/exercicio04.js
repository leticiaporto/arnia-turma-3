const io = require('../../io-lib/io')

let anos
let numeroPorDia
let preco
let quantidadeCigarros
let quantidadeMacos
let valorTotal

io.write('Fuma há quantos anos?')
anos = io.readInt()
io.write('Fuma quantos cigarros por dia?')
numeroPorDia = io.readInt()
io.write('Qual o valor do maço?')
preco = io.readFloat()

quantidadeCigarros = anos * 365 * numeroPorDia
quantidadeMacos = quantidadeCigarros / 20
valorTotal = quantidadeMacos * preco

/*
    Outra opção de cálculo:

    let valorCigarro = preco / 20
    valorTotal = quantidadeCigarros * valorCigarro
*/

io.write('Gasto do fumante: ')
io.write(valorTotal)