"use strict"

let valor,
    fatorial = 1,
    control = 1

valor = Number(prompt(`Digite um valor para o fatorial`))

while (control <= valor) {
    fatorial*=control
    control++
}

console.log(fatorial)