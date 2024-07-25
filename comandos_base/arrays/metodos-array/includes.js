// INCLUDE: Verificar se um elemento existe num Array e retorna um boolean

let informacoes = ["Frankenstein", "Drácula", "Jogador Número 1", 100]


// Pode procurar diretamente pelo valor ou pelo valor e o indice no array

console.log(informacoes.includes("Drácula")) // Retorna True
console.log(informacoes.includes("Drácula", 3)) // Retorna False: procurar o valor a partir do indice 3