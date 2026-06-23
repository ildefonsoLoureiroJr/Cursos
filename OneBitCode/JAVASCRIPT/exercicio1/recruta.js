const nome = prompt("Digite seu Nome: ")
const sobrenome = prompt("Digite seu Sobrenome: ")
const estudo = prompt("Digite seu campo de estudo: ")
const anorNasc = parseFloat(prompt("Digite o ano em que nasceu: "))
const idade = 2026 - anorNasc

confirm("Deseja cadastrar o recruta " + nome + " ?")
alert("Recruta cadastrado com sucesso! ")

console.log("DADOS DO RECRUTA:\n\nNome completo: " + nome + " " + sobrenome + "\nEstudante de: " + estudo + "\nIdade: " + idade + " anos.")
