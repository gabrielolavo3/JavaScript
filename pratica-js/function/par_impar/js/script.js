// Criar uma função que recebe um valor inteiro e verifica se o valor é par ou ímpar. A função deve retornar um valor booleano

"use strict"

function tipo(numero) {
    if (numero % 2 == 0) {
        numero = true
    } else {
        numero = false
    }

    return numero
}

let valor = Number(prompt("Digite um número"))
console.log(tipo(valor))