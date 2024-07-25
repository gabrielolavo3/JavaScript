// Criar uma função que recebe um valor inteiro e positivo e calcula o seu fatorial.

"use strict"

let fatorial = (valor)=>{
    let cont,
        fator = 1,
        numero = valor
    
    for (cont = 1; cont <= numero; cont++) {
        fator *= cont
    }

    return fator
}

let numeral = Number(prompt("Digite 1 número"))
console.log(fatorial(numeral))