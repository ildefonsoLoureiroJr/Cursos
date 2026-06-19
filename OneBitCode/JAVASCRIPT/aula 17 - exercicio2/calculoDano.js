const personagemAtaque = prompt("Digite o nome do personagem de ataque: ")
const poderAtaque = parseFloat(prompt("Digite o poder de ataque do " + personagemAtaque + (":")))
const personagemDefesa = prompt("Digite o nome do personagem de defesa: ")
let pontosVida = parseFloat(prompt("Digite os pontos de vida: "))
const poderDefesa = parseFloat(prompt("Digite o poder de defesa do " + personagemDefesa + (":")))
const escudo = confirm("O defensor possui escudo S/N ?")
let dano = 0
if ((poderAtaque > poderDefesa) && (escudo === false)){
    dano = poderAtaque - poderDefesa
} else if ((poderAtaque > poderDefesa) && (escudo === true)){
    dano =  ((poderAtaque-poderDefesa)/2) - dano
}else {
    dano = 0
}

pontosVida = pontosVida - dano
console.log(personagemDefesa + " sofreu "+ dano +" de dano e agora está com, " + pontosVida + " de pontos de vida.")

