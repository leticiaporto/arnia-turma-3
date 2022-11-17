const io = require('../io-lib/io')

let i = 0
let somaIdades = 0
let quantidadeMais90 = 0
const quantidadePessoas = 3

while (i < quantidadePessoas) {
    io.write('Digite a idade ' + (i + 1) + ':')
    const idade = io.readInt();

    io.write('Digite o peso ' + (i + 1) + ':')
    const peso = io.readFloat();

    somaIdades = somaIdades + idade

    if(peso > 90) {
        quantidadeMais90++
    }

    i++
}

const media = somaIdades / quantidadePessoas

io.write('A quantidade de pessoas com mais de 90 quilos é: ' + quantidadeMais90)
io.write('A média das idades das sete pessoas é: ' + media)