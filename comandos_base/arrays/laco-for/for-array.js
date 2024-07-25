"use strict"

let G,
    valores = [10, 20, 30, 40]

//Laço FOR original

for (G = 0; G < valores.length; G++) {
    console.log(G) // Imprimir o indice do Array
}

for (G = 0; G < valores.length; G++) {
    console.log(valores[G]) // Imprimir os elementos do Array
}

// Laço FOR IN: variável de controle recebe tamanho Array e seus indices

console.log("\nImpressão FOR IN")
for (G in valores) {
    console.log(valores[G])
}

// Laço FOR OF: variável de controle recebe os elementos do Array

console.log("\nImpressão FOR OF")
for (G of valores) {
    console.log(G)
}