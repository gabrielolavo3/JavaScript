// Função que recebe, por parâmetro, um valor inteiro e positivo e retorna o somatório desse valor.

"use strict"

let somaFinal = new Function ("valor", "return valor + valor")

let numero = Number(prompt("Digite um valor qualquer"))
console.log(somaFinal(numero))