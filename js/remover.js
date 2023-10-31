
window.onload = async function () {

    var resultado = await fetch("../php/getproducts.php", {
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
                <img class="produto-info" src="../img/produtos/${dados[i].id}.png">
                <div class="produto-valor">
                    <h4>R$${dados[i].preco}</h4>
                </div>                
            </div>
            <button class="produto-botao" onclick="remover(${dados[i].id})">Remover Produto</button>
        </div>
    </div>`;
    
        document.getElementById("produtos").innerHTML += conteudo;
    
    }
}

function searchFunction() {
    // Get the value of the search bar
    var input, filter, divs, a, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();

    divs = document.getElementById("produtos");
    
    div = divs.getElementsByClassName("produto");
    a = divs.getElementsByClassName("produto-nome");

    // Loop through all divs, and hide those who don't match the search query
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].parentElement.style.display = "";
        } else {
            div[i].parentElement.style.display = "none";
        }
    }
}

function remover(id) {

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

    fetch('../php/removerproduto.php', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
    location.reload()
    
}
