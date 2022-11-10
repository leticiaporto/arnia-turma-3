const io = require('../io-lib/io')

io.write('Nome:')
const nome = io.read()
io.write('Idade:')
const idade = io.readInt()
io.write('Rua:')
const rua = io.read()
io.write('Número:')
const numero = io.read()
io.write('Complemento:')
const complemento = io.read()
io.write('Bairro:')
const bairro = io.read()
io.write('Cidade:')
const cidade = io.read()
io.write('UF:')
const uf = io.read()
io.write('Estado civil:')
const estadoCivil = io.read()

const pessoa = {
    nome: nome,
    idade: idade, 
    endereco: {
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        complemento: complemento,
    },
    estadoCivil: estadoCivil
}

io.write(`${pessoa.nome}, ${pessoa.idade}, que mora na rua ${pessoa.endereco.rua} ${pessoa.endereco.numero}, ${pessoa.endereco.complemento}, bairro ${pessoa.endereco.bairro}, ${pessoa.endereco.cidade}-${pessoa.endereco.uf}. ${pessoa.estadoCivil}.`)
