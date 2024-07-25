// Função não parametrizada

function impressao() {
    console.log("Isso é uma função em uso")
}

// Função não parametrizada com retorno de um resultado

function soma() {
    let n1 = 1,
        n2 = 3

    return n1 + n2
}

function condicional() {
    let valor = 4

    if (valor % 2 == 0) 
        return "É par"
    else 
        return "É impar"
}

impressao() // Chamada de função | Executa o bloco de comando ao ser usado
console.log(soma())

resultado = condicional() // Atribuição de função a uma variável
console.log(resultado)