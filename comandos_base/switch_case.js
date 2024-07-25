/* Switch sem o break! 
Verifica o valor da variável e associa com o valor de cada case estabelecido. Ao encontrar o valor igual a da variável, executa o bloco de comando
O break serve para parar a execução. E o default, executa um bloco ao não encontrar um valor correspondente */

"use strict"

let operacao = 3,
    resultado,
    primeiroValor = 2,
    segundoValor = 3,
    dia = 1 

switch(operacao) {
    case 1:
        resultado = primeiroValor + segundoValor
        break
    
    case 2:
        resultado = primeiroValor - segundoValor
        break
    
    default:
        resultado = "Valor inválido!"
        break
}

console.log(resultado)

/* Switch sem o break!
Sem o break, os cases serão invádidos até o encontro do break */

switch (dia) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log ("Dia Útil");
    break
    
    case 1:
    case 7:
        console.log ("Final de Semana");
    break
    
    default:
        console.log ("Número informado é inválido!");
    break
}