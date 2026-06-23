const metros = parseFloat(prompt("Digite o valor em metros: "))
let opcao = prompt("Digite qual oção deseja converter mm, cm, dm, dam, hm e km :")

switch(opcao){
    case "mm":
        result = metros*1000
        break
    case "cm":
        result = metros*100
        break
    case "dm":
        result = metros*10
        break
    case "dam":
        result = metros/10
        break
    case "hm":
        result = metros/100
        break
    case "km":
        result = metros/1000
        break
}

alert(result)