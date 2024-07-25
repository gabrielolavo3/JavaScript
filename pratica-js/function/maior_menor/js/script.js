// incompleto

"use strict"

const TAM = 10

let maior_menor = (valores) => {
    let maior = Number.MIN_VALUE,
        menor = Number.MAX_VALUE,
        ctrl = 1,
        resultado
    
    while (ctrl <= TAM) {
        maior = maior < valores ? valores : maior
        menor = menor > valores ? valores : menor
        ctrl++
    }

    resultado = `O maior valor é ${maior} e o menor é ${menor}`

    return resultado
}

let G,
    numeros

for (G = 1; G <= TAM; G++) {
    numeros = Number(prompt(`Digite o ${G}º valor`))
    console.log(maior_menor(numeros))
}
