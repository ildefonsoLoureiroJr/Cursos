const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('input[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('input[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salad += ' - ' + item.value + '\n'
    })

    console.log({
        name,
        address,
        breadType,
        main,
        observations,
        salad
    })

    alert(
        "Pedido Realizado:" + 
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address + 
        "\nTipo ed Pão: " + breadType +
        "\nRecheio: " + main + 
        "Observações: " + observations
    )

})