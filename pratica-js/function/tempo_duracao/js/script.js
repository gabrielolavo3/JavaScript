/*
Criar uma função que recebe por parâmetro o tempo de duração de uma fábrica expressa em segundos 
e retorna também por parâmetro esse tempo em horas, minutos e segundos */

horas = (segundos)=>{
    hora = segundos / 3600
    restoDivisao = segundos % 60
    minutos = restoDivisao / 60
    segundo = segundos % 60

    tempoFinal = `O tempo é de ${hora.toFixed(0)}:${minutos.toFixed(0)}:${segundo.toFixed(0)}`
    
    return tempoFinal
}

tempo = Number(prompt("Digite o tempo de duração em segundos"))

console.log(horas(tempo))