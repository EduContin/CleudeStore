
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
                    <h2>Kit Crochê</h2>
                </div>
                <img class="produto-info" src="img/produtos/kitcroche.webp">
                <div class="produto-valor">
                    <h4>R$40.00</h4>
                </div>                
            </div>
            <button class="produto-botao">Adicionar ao Carrinho</button>
        </div>
    </div>`;
    
        document.getElementById("produtos").innerHTML += conteudo;
    
    }
}
