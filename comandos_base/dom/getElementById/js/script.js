// getElementById consegue captar um elemento HTML apenas pelo iD

const lin1 = document.getElementById("l1")
const lin2 = document.getElementById("l2")

console.log(lin1) // Imprimi a linha HTML que está o id
console.log(lin1.id) // Imprimi qual é o id no HTML
console.log(lin1.innerHTML) // Imprimi o conteudo de lin1

lin2.innerHTML = "Gabriel" // Altera o conteúdo no HTML