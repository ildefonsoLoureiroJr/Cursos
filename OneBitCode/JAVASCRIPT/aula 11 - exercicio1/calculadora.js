const valor1 = parseFloat(prompt("Digite o primeiro valor: "))
const valor2 = parseFloat(prompt("Digite o segundo valor: "))
const soma = valor1 + valor2
const subtracao = valor1 - valor2
const multiplicacao = valor1 * valor2
const divisao = valor1 / valor2

console.log("CALCULADORA DE 4 OPERAÇÕES:\n\nA soma de "+ valor1 + " + " + valor2 + " = " + soma + 
    ".\nA subtração de "+ valor1 + " - " + valor2 + " = " + subtracao + 
    ".\nA multiplicação de "+ valor1 + " * " + valor2 + " = " + multiplicacao +
    ".\nA divisão de "+ valor1 + " / " + valor2 + " = " + divisao + "."
)