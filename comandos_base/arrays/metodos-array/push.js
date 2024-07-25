// Método Push -> Adicionar qualquer valor novo a última posição do array

let valores = [10,20,30]

valores.push(40,50, "Gabriel", true, undefined, 12.6)

console.log(valores)
console.log("O tamanho do array é " + valores.length)

for (g in valores) {
    console.log(valores[g])
}