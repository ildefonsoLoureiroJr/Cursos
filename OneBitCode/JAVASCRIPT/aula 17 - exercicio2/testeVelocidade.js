const carro1 = prompt("Digite o nome do primeiro carro: ")
const velocidade1 = parseFloat(prompt("Digite a velocidade do  primeiro carro em km/s: "))
const carro2 = prompt("Digite o nome do segundo carro: ")
const velocidade2 = parseFloat(prompt("Digite a velocidade do segundo carro em km/s: "))

const resultado = 0
if (velocidade1 > velocidade2) {
    alert(carro1 + " é mais rápido que o " + carro2)
} else if (velocidade1 === velocidade2){
    alert(carro1 + " tem a mesma velocidade que o " + carro2)
} else {
    alert(carro2 + "é mais rápido que o " + carro1)
}