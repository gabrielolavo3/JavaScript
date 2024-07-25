/* 
Calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. 
O usuário deverá informar a quantidade de CDs e o valor para em cada um */

"use strict"

let G = 1,
    quantCD,
    valor,
    soma = 0,
    media = 0

quantCD = Number(prompt("Digite a quantidade de CD's adquiridos"))

while (G <= quantCD) {
    valor = Number(prompt(`Qual o valor do ${G}º CD?`))
    G++

    soma += valor
    media = soma / quantCD
}

console.log(`Foi gasto o total de R$ ${soma} com os CD's. Com um custo médio de R$ ${media} por cada item`)