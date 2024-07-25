"use strict"

let G,
    valores = []

valores.length = 5

for (G in valores) {
    valores[G] = Number(prompt(`Digite o ${G}º número`))
}

for (G of valores) {
    console.log(G)
}