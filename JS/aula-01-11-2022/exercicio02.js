const io = require('../io-lib/io')

function aplicaDesconto(arrayPrecos) {
    arrayPrecos = arrayPrecos.map(function (preco) {
        if (preco > 500) {
            return preco - (preco * (15/100))
        }
        return preco
    })

    io.write(arrayPrecos)
}

const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]
aplicaDesconto(vetor)