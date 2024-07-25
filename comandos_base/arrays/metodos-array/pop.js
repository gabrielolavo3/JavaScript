// POP: Remove o último valor do Array e retorna o valor deletado

"use strict"

let valores = [10, 20, "Crónicas de Nárnia", 30, 40, "Senhor dos Anéis", true],
    elementoRemevido

elementoRemevido = valores.pop()

console.log(valores) // Array com novo tamanho
console.log("O elemento removido foi " + elementoRemevido)
console.log(valores.length)