
"use strict"

let control = 1,
    valor = 1.99,
    total

console.log("Lojas Quase Dois - Tabela de preços\n")

while (control <= 50) {
    total = valor * control
    console.log(`${control} - R$ ${total.toFixed(2)}`)
    control++
}