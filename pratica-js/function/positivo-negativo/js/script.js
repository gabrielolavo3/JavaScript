"use strict"

function booleano(valor) {
    if (valor > 0) {
        valor = true
    
    } else if(valor < 0) {
        valor = false
    }

    return valor
}

let numero,
    resultado

numero = Number(prompt("Digite um número inteiro"))
resultado = booleano(numero)

console.log(resultado)