"use strict"

let G,
    nota = []

    nota.length = 2 // Definindo o tamanho de um array vázio

for (G = 0; G < nota.length; G++) {
    nota[G] = Number(prompt(`Digite a ${G+1}ª nota`))
}

console.log(`Suas notas foram ${nota[0]} e ${nota[1]}`)