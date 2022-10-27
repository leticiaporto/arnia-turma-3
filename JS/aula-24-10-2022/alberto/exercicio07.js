const io = require('../../io-lib/io')

io.write('Digite o salário:')
const salario = io.readFloat()
io.write('Digite o percentual de reajuste:')
const percentualReajuste = io.readFloat()

const reajuste = salario * (percentualReajuste / 100)
const novoSalario = salario + reajuste

io.write('Novo salário: ' + novoSalario)