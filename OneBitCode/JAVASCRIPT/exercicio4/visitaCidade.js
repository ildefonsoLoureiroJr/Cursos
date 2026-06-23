const nome = prompt("Digite seu nome: ")
let cidades = ""
let qtdCidade = 0

let pergunta = prompt("Você visitou alguma Cidade (sim/não)?")
while (pergunta === "sim"){

    let cidade = prompt("Qual cidade você visitou ?")
    cidades += " - " + cidade + "\n"
    qtdCidade++
    pergunta = prompt("Você visitou mais alguma Cidade? (Sim/Não")
}

    alert("Nome: " + nome + 
    "\nCidade: " + cidades + 
    "\nQuantas Cidades:\n" + qtdCidade)



