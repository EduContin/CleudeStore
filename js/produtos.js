
window.onload = async function () {

    var resultado = await fetch("php/getproducts.php", {
        method: "GET"
    });

    var dados = await resultado.json();

    console.log(resultado)
    
    for (var i = 0; i < dados.length; i++ ) {

        var conteudo =
        `<div id="produtos" class="produtos">
        <div class="produto">
            <div class="produto-info">
                <div class="produto-nome">
                    <h2>${dados[i].nome}</h2>
                </div>
                <img class="produto-info" src="img/produtos/${dados[i].id}.png">
                <div class="produto-valor">
                    <h4>R$${dados[i].preco}</h4>
                </div>                
            </div>
            <button class="produto-botao" onclick="adicionar_ao_carrinho(${dados[i].id})">Adicionar ao Carrinho</button>
        </div>
    </div>`;
    
        document.getElementById("produtos").innerHTML += conteudo;
    
    }
}

// async function adicionar_ao_carrinho(id){
    
//     var resposta = await fetch('php/adicionaraocarrinho.php',{
//         method:"POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: {"id": id}
//     });

//     console.log(resposta)
// }

function adicionar_ao_carrinho(id) {

    const data = {
        id: id
    };

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch('php/adicionaraocarrinho.php', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
}