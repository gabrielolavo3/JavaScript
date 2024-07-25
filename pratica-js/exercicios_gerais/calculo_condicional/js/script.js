"use strict"

let A,
    B,
    C

A = Number(prompt("Digite um inteiro para A: "))
B = Number(prompt("Digite um inteiro para B: "))

A == B ? C = A + B : C = A * B

console.log("O valor de C é " + C)