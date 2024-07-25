"use strict"

let valor,
    control,
    restoDivisao = 0

valor = Number(prompt("Insira um número"))

for (control = 1; control <= valor; control++) {
    if (valor % 2 == 0) {
        restoDivisao++
    }
}

if (restoDivisao == 2) {
    console.log(`${valor} é primo`)

} else {
    console.log("Não é primo")
}