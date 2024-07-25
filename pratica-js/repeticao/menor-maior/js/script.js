"use strict"

let valor = 1,
    soma = 0,
    final,
    G = 1,
    maior = Number.MIN_VALUE,
    menor = Number.MAX_VALUE

while (valor != 0) {
    valor = Number(prompt(`Digite o ${G}º número`))
    G++

    if (valor != 0) {
        final = valor
    }

    soma += final
    maior = maior < final ? final : maior
    menor = menor > final ? final : menor
}

console.log (`O maior e o menor número são ${maior} e ${menor}, respectivamente`)
console.log ("A soma total é " + soma)