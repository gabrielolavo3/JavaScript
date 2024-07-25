"use strict"

let par_impar, 
    neg_posi

let numero = Number(prompt("Digite um número"))

if (numero % 2 == 0) {
    par_impar = "Esse número é par" 

} else {
    par_impar = "Esse número é par"
}

if (numero > 0) {
   neg_posi = "positivo"

} else if (numero < 0) {
    neg_posi = "negativo"
}

console.log (par_impar + " e " + neg_posi)