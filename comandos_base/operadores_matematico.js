"use strict"

let numero1 = 10,
    numero2 = 20,
    numero3 = 30
    
    numero1 = numero2 = numero3 = 40 // Atribuição de um mesmo valor para variáveis

let rest1 = numero1 + numero2,
    rest2 = numero1 % numero2, // Operador mod -> retorna o resto da divisão
    rest3 = numero1 / numero2,
    rest4 = numero1 - numero2,
    rest5 = numero1 * numero2

    numero1++ // Incremento -> numero1 = numero1 + 1
    numero1-- // Decremento -> numero1 = numero1 - 1
    numero2*=5
    numero2+=20
    numero2/=3

console.log(numero2.toFixed(2)) // Fixando a quantidade de casas decimais 