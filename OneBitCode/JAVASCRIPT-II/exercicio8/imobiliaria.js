const imoveis = []
let opcao = ""

do{
    opcao = prompt(
        "Bem vindo(a) ao Cadastro de Imóveis!\n" +
        "Total de Imóveis: " + imoveis.length + 
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    )

    switch (opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel: ")
            imovel.quartos = prompt("Quantos quartos possui no imóvel? ")
            imovel.banheiros = prompt("Quantos banheiros possui no imóvel?")
            imovel.garagem = prompt("Possui garagem? (Sim / Não)")

            const confirmacao = confirm(
            "Salvar este imovel\n" +
            "\nProprietário: " + imovel.proprietario + 
            "\nQuatos: " + imovel.quartos + 
            "\nBanheiros: " + imovel.banheiros + 
            "\nPossui garagem? " + imovel.garagem   
            )

            if (confirmacao){
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Voltando ao menu.")
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert(
                    "Imovel " + (i + 1) + 
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuatos: " + imoveis[i].quartos +
                    "\nBenheiros: " + imoveis[i].banheiros + 
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Saindo ...")
            break
        default:
            alert("Opção inválida")
    }
} while (opcao !== "3")