let pessoa = {
    nome: "Ildefonso",
    idade: 39,
    dizerOla() {
        console.log("olá mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)
pessoa.dizerOla()

