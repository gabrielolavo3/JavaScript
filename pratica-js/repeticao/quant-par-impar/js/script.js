"use strict"

let G,
    numeros,
    par = 0,
    impar = 0

for (G = 1; G <= 10; G++) {
    numeros = Number(prompt(`Digite o ${G}º número`))

    if (numeros % 2 == 0) {
        par++
    
    } else if (numeros % 2 != 0) {
        impar++
    }
}

console.log("Quantidade de par: " + par)
console.log("Quantidade de ímpar: " + impar)