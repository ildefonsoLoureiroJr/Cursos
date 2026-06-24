function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))
}

dobro(5)
dobro(7)

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!")
}

dizerOla("Ildefonso")
dizerOla()

function soma(a, b){
    alert("O resultado da soma é: " + (a + b))
}

soma(7,6)
soma(1,1)

function criarUsuario(nome, email, senha, tipo="admin"){
    const usuario = {
        nome, // mesmo que nome: nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

function novoUsuario(nome, tipo = "admin", eamil, senha){
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

criarUsuario("Ildefonso", "email@email.com", "1234" )
novoUsuario("Ildefonso", "admin", "email@email.com", "1234" )

function muitosParametros(nome, telefone, endereco, aniversario,email,senha){
    //...
}

function objetoComParametros(usuario){
    //...
    usuario.nome
    usuario.email
}
muitosParametros("nome", "telefone", "endereco", "email", "senha")

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComParametros(dadosDoUsuario)