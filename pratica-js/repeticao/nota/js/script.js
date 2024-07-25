nota = Number(prompt("Digite a nota: "))

while (nota < 0 || nota > 10) {
    alert('Nota inválida!')
    nota = Number(prompt("Digite a nota novamente: "))
}

alert('Nota aceita!')