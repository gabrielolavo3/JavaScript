"use strict"

let control = 0,
    valores,
    soma = 0,
    media = 0

while (control < 5) {
    valores = Number(prompt(`Digite o ${control+1}º número`))
    control++

    soma += valores
    media = soma / control
}

console.log("A soma dos números é " + soma)
console.log("A média final é " + media.toFixed(2))