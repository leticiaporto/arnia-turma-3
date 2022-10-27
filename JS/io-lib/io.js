/* Arnia - março/2022
 * SCRIPT DE ENTRADA E SAÍDA
 * Objetivo: o objetivo desse script não é servir de referência de boas práticas e
 * sim para ensinar os conceitos de entrada e saída para iniciantes
 */

const teclado = require("prompt-sync")()

exports.write = (linha) => console.log(linha)

exports.read = () => {
  res = teclado()
  return res
}

exports.readInt = () => {
  res = teclado()
  return parseInt(res)
}

exports.readFloat = () => {
  res = teclado()
  return parseFloat(res)
}
