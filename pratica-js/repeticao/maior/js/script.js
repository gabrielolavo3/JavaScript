"use strict"

let valor, 
    control = 1,
    maior = Number.MIN_VALUE

while (control <= 5) {
    valor = Number(prompt(`Digite o ${control}º número`))
    control++

    if (maior < valor) {
        maior = valor
    }
}

alert('O maior valor é ' + maior)