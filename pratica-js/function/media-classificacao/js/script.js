// Fazer uma função que recebe a média final de um aluno por parãmetro e retorna o seu conceito

"use strict"

const conceitoFinal = (media)=>{
    let conceito

    if (media >= 0 && media < 5) {
        conceito = 'Sua média foi D'
    
    } else if (media >= 5 && media < 7) {
        conceito = 'Sua média foi C'
    
    } else if (media >= 7 && media < 9) {
        conceito = 'Sua média foi B'
    
    } else {
        conceito = 'Sua média foi A'
    }

    return conceito
}

let media = Number(prompt("Digite a sua média"))

while (media < 0 || media > 10) {
    alert('Média inválida! Insira novamente')
    media = Number(prompt("Digite a sua média"))
}

console.log(conceitoFinal(media))