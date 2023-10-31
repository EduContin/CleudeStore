
window.onload =  async function () {
    var resposta = await fetch('php/getcarrinho.php',{
        method:"GET"
    });
    
    var dados = await resposta.json();

    for(var i=0; i< dados.length;i++){
        var id = dados[i].id;
        var quantidade = dados[i].quantidade;
        var product_name = dados[i].nome;
        var price = dados[i].preco;
        var card = 
        `<div class="products">
            <div class="img-space"><img src="img/produtos/${id}.png"class="img-product"></div>
            
            <div class="product-name">${product_name}</div>
            <input type="number" class="quantidade" value=${quantidade} id ="quant-${id}" onchange="quantidademudou(${id},document.getElementById('quant-${id}').value)"> 
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
    var resposta = await fetch('php/deletarcarrinho.php',{
        method:"POST",
        body:dados
    });
    location.reload()
}

async function quantidademudou(id,quantidade){

    var dados = new FormData;
    dados.append("id_quantidade",id);
    dados.append("quantidade",quantidade);
    var resposta = await fetch('php/mudarquantidade.php',{
        method:"POST",
        body:dados
    });

}
