// Fazer um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a tabuada de 1 até N

"use strict"

let tabuda = (numero) => {
    let control = 1,
        valorT = numero

    while (control <= valorT) {
        console.log(`${valorT} x ${control} = ${valorT * control}`)
        control++
    }
}

let valor = Number(prompt("Digite um número para a tabuada"))
console.log(tabuda(valor))