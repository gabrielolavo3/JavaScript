"use strict"

let G,
    primeiroValor,
    segundoValor,
    soma = 0

primeiroValor = Number(prompt("Digite o 1º valor"))
segundoValor = Number(prompt("Digite o 2º valor"))

for (G = primeiroValor + 1; G < segundoValor; G++) {
    console.log(G)
    soma+=G
}

console.log("A soma dos valores é " + soma)