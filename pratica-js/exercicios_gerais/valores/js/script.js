"use strict"

let A = Number (prompt("Digite o valor de A: "))
let B = Number (prompt("Digite o valor de B: "))
let C = Number (prompt("Digite o valor de C: "))

let soma = A + B

console.log("A soma de A e B é " + soma)

if (soma < C) {
    console.log("A soma dos valores é menor que C")

} else {
    console.log("A soma dos valores é maior que C")
}