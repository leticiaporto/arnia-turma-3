const io = require('../io-lib/io')

class Invoice {
    numero
    descricao
    quantidade
    preco

    constructor(numero, descricao, quantidade, preco) {
        this.numero = numero
        this.descricao = descricao
        this.quantidade = quantidade < 0 ? 0 : quantidade
        this.preco = preco < 0 ? 0.0 : preco
    }

    getValor() {
        return this.quantidade * this.preco
    }
}

const fatura = new Invoice(1, 'Fatura 1', 5, 500.00)
io.write(fatura)

const totalFatura = fatura.getValor()
io.write(totalFatura)