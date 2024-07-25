// Funções com parametro

function soma(valor1, valor2) {
    return valor1 + valor2
}

function operacao(primeiroValor, segundoValor) {
    if (primeiroValor == segundoValor) {
        return primeiroValor * segundoValor
    
    } else {
        return primeiroValor - segundoValor
    }
}

/* Função com valor padrão. 
Caso não haja a passagem de valores, as variáveis da função assumem o valor determinado pelo usuário, como 0 */

function divisao(v1 = 0, v2 = 0, v3) {
    return v1 / v2 / v3
}

/* Na chamada da função, há a passagem de valores para as variáveis da função
O 10 irá para valor1, e 3 para valor2 */

soma(10,3) // Aqui há apenas a passagem de valor para função
console.log(soma(10, 3))

// atribuição do valor de função para uma variável

resultado = operacao(2,4) 
console.log(resultado)

console.log(divisao(2,2,4))

/* Função que altera valores fora do escopo */

let valor = 0
console.log(valor)

function alteracao(v) {
    return valor+v
}

valor = alteracao(10)
console.log(valor)

valor = alteracao(15)
console.log(valor)