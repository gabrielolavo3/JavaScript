/* Arrow Function ou Função Lampda!
É a forma mais simples e moderna de função. Ela é atribuida a uma variável 
e usa ()=>{} para escrever o bloco de código*/

// Arrow function não parametrizada

linguagem = ()=>{
    console.log("JS")
}

linguagem()

soma = ()=> {
    let n1 = 1,
        n2 = 3

    return n1 + n2
}

console.log(soma())

// Arrow function parametrizada

divisao = (n1, n2)=> {
    return n1 / n2
}

console.log(divisao(10,3).toFixed(2))

// Quando há instrução simples e 1 linha, não é necessário o return

let nome = n => n
sub = (n1, n2)=> n1 - n2

console.log(nome('Gabriel'))
console.log(sub(5, 7))

// Função que precisa de return, pois opera e atribui a outra variável do escopo

divisao2 = (v1, v2)=> {
    resultado = v1 / v2
    return resultado
}

console.log(divisao2(10,10))