
window.onload =  async function () {
    var resposta = await fetch('php/getcarrinho.php',{
        method:"GET"
    });
    
    var dados = await resposta.json();

    for(var i=0; i< dados.length;i++){
        var id = dados[i].id
        var product_name = dados[i].nome;
        var price = dados[i].preco;
        var card = 
        `<div class="products">
            <div class="img-space"><img src="img/${id}.png"class="img-product"></div>
            <div class="product-name">${product_name}</div>
            <div class="price">R$:${price}</div>

            <div class="remove" onclick="deletar(${id})">
                <i class="fa-solid fa-trash"></i>
            </div>    
        </div>`
        document.getElementById("card-produtos").innerHTML += card;
    }
}
async function deletar(id){
    var dados = new FormData;
    dados.append("id_deletar",id);
    var resposta = await fetch('php/getdeletarcarrinho.php',{
        method:"POST",
        body:dados
    });
    location.reload()
}
