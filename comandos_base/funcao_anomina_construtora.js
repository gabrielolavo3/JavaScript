/* Função anônima!
Com ela, não é preciso nomear a função, mas é preciso atribuir a uma variável Cons, Let ou Var */

let G = function(valor1, valor2, valor3) {
    return valor1 + valor2
}

G(10,23, 15)
console.log(G)
console.log(G(10,23, 15))

/* Função construtor e anõnima!
Uma função com retornos simples, na qual cada parametro está entre aspas e a última condição é o retorno da função
Nela, a indicação de Construtor é new Function*/

var L = new Function("p1", "p2", "return p1 / p2")

console.log(L(10,2))