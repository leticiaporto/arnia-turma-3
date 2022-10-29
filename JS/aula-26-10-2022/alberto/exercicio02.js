const io = require('../../io-lib/io')

io.write('Informe o número de carros vendidos:')
const numeroCarros = io.readInt()
io.write('Informe o valor total das vendas:')
const valorvendas = io.readFloat()
io.write('Informe o salário fixo:')
const salarioFixo = io.readFloat()
io.write('Informe o valor por carro:')
const valorPorCarro = io.readFloat()
 
const salarioFinal = salarioFixo + (valorPorCarro * numeroCarros) + (valorvendas * (5/100))

io.write('O salário final é: ' + salarioFinal)