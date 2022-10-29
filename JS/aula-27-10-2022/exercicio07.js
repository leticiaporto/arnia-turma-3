const io = require('../io-lib/io')

let aresta
let volumeCubo
let raio
let volumeEsfera

io.write('Digite o valor da aresta do cubo: ')
aresta = io.readInt()

io.write('Digite o valor do raio da esfera: ')
raio = io.readInt()

volumeCubo = aresta ** 3
volumeEsfera = (4 * 3.14 * (raio ** 3)) / 3

io.write('O Volume do Cubo é: ')
io.write(volumeCubo)

io.write('O Volume da Esfera é: ')
io.write(volumeEsfera)

if(volumeCubo > volumeEsfera) {
    io.write('O volume do Cubo é maior do que o volume da Esfera.')
} else {
    io.write('O volume da Esfera é maior do que o volume da Cubo.')
}