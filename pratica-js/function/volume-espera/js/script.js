// Criar uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume

"use strict"

function volume(raio) {
    let volume
    
    volume = (4 * 3.14 * (raio**3)) / 3
    return volume.toFixed(2)
}

let raio = Number(prompt("Digite o valor do raio"))

console.log("O volume da espera é de " + volume(raio))