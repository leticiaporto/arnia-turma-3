const io = require('../io-lib/io')

class Data {
    dia
    mes
    ano

    constructor(dia, mes, ano) {
        const diaInvalido = dia < 1 || dia > 31
        const mesInvalido = mes < 1 || mes > 12

        if (diaInvalido || mesInvalido || ano < 1) {
            this.dia = 1
            this.mes = 1
            this.ano = 1900
        } else {
            this.dia = dia
            this.mes = mes
            this.ano = ano
        }
    }

    toString() {
        // Utiliza-se o .slice(-2) para recuperar sempre os dois últimos numeros da string
        const dia = `0${this.dia}`.slice(-2)
        const mes = `0${this.mes}`.slice(-2)
        return `${dia}/${mes}/${this.ano}`
    }

    // consideramos aqui meses de 31 dias 
    acrescentarUmDia() {
        if (this.dia < 31) {
            this.dia = this.dia + 1
            return
        }

        this.dia = 1

        if (this.mes < 12) {
            this.mes = this.mes + 1
            return
        }

        this.mes = 1
        this.ano = this.ano + 1
    }
}

const data = new Data(31, 2, 1991)
io.write(data.toString())
data.acrescentarUmDia()
io.write(data.toString())
