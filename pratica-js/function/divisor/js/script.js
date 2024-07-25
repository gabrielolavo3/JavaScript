// Criar uma função que recebe, por parâmetro, um valor inteiro e positivo e retorna o número de divisores desse valor.

"use strict"

let divisores = (valor) => {
    let quantDivisor = 0,
        G = 1

    while (G <= valor) {
        if (valor % G == 0) {
            quantDivisor++
        }
        G++
    }

    return quantDivisor
}

let numeroDivisor = Number(prompt("Digite um valor"))
console.log(divisores(numeroDivisor))