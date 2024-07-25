// Criar um programa que leia 3 notas em um array e imprima os valores

"use strict"

const tam = 3
let G,
    dados,
    notas = []

for (G = 0; G < tam; G++) {
    dados = Number(prompt(`Insira a ${G+1}ª nota`))
    notas.push(dados)
}

for (G = 0; G < tam; G++) {
    notas[G].short()
    console.log(notas[G])
}