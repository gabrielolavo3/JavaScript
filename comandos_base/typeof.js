// Typeof retorna o tipo de variável (number, boolean, string)

int = 10
float = 10.10
string = "10"
contatenacao = int === string
objeto = [nome = "Gabriel"]

console.log ("Valor: " + string + " - " + typeof(string))
console.log ("Valor: " + int + " - " + typeof(int))
console.log ("Valor: " + float + " - " + typeof(float))
console.log ("Valor: " + contatenacao + " - " + typeof(contatenacao))
console.log ("Valor: " + objeto + " - " + typeof(objeto))

console.log (typeof([] + {}))
console.log (typeof({} == ""))