/*Imprime os produtos que estao no carrinho + o preco total deles*/


window.onload = async function () {
    var resultado = await fetch("php/finalizar-products.php", {
        method: "GET",
    });

    var produtos = await resultado.json();

    var preco_total = 0;
    for (var i = 0; i < produtos.length; i++){
        var conteudo_produtos = 
        `<div class="produtos">
            <div class="produto-cima">
                <div class="produto-nome">${produtos[i].nome}</div>
                <div class="produto-preco">R$${produtos[i].preco}</div>
            </div>
            <div class="produto-baixo">x${produtos[i].quantidade}</div>
        </div>`;
        document.getElementById("espaco-produtos").innerHTML += conteudo_produtos;
        
        preco_total += parseFloat(produtos[i].preco_produto);
    }
    var conteudo_preco = 
    `<div class="preco-total-text">R$${parseFloat(preco_total).toFixed(2)}</div>`;

    document.getElementById("preco-total").innerHTML = conteudo_preco;
}


/*Ambas as funcoes credito_cartao e 
debito_cartao validarao se sera usado
o icone de mastercard ou visa*/

function credito_cartao() {
    var conteudo = ``;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;

    var conteudo =`                        
    <div class="verificacao-card">
        <div class="verificacao-titulo">
            <h3 style="color:white;">Qual Cartao voce usa?</h3>
        </div>
    
        <div class="verificacao-baixo">
            <select id="select" class="verificacao-select">
                <option value="1" selected>VISA</option>
                <option value="2">Mastercard</option>
            </select>
            <button class="verificacao-botao" type="button" onclick="credito()">Continuar</button>
        </div>
    </div>`;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;
}

function debito_cartao() {  
    var conteudo = ``;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;

    var conteudo =`                        
    <div class="verificacao-card">
        <div class="verificacao-titulo">
            <h3 style="color:white;">Qual Cartao voce usa?</h3>
        </div>
    
        <div class="verificacao-baixo">
            <select id="select" class="verificacao-select">
                <option value="1" selected>VISA</option>
                <option value="2">Mastercard</option>
            </select>
            <button class="verificacao-botao" type="button" onclick="debito()">Continuar</button>
        </div>
    </div>`;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;
}

var tipo_cartao = ['<i class="fa-brands fa-cc-visa"></i>', '<i class="fa-brands fa-cc-mastercard"></i>'];


/*As funcoes credito e debito sao chamadas por suas 
respectivas funcoes _cartao e possuem uma verificacao
do valor final do select nas funcoes anteriores,
 que escolhera quais icones serao usados. 
 Elas imprimiram na tela os inputs necessarios para o usuario preencher*/

async function credito() {
    var pegando_precos = await fetch("php/finalizar-products.php", {
        method: "GET",
    });

    vetor_precos = await pegando_precos.json();

    var parcelas = 0;
    for (var i = 0; i < vetor_precos.length; i++) {
        parcelas += vetor_precos[i].preco * vetor_precos[i].quantidade;
    }

    resultado = document.getElementById("select").value;

    var conteudo = ``;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;

    conteudo = 
    `<div class="titulo-pagamento">
        <h3 style="color:white;">Dados do titular do cartao</h3>
    </div>
    <form id="formulario" class="container">
            <label class="label">Numero do Cartao
                ${tipo_cartao[resultado-1]}
                <input name="num_cartao" class="input" type="text" required/>
            </label>

            <label class="label">CPF
                <input name="cpf" class="input" type="text" required/>
            </label>                     

            <label class="label">Nome Completo
                <input name="nome" class="input" type="text" required/>
            </label>    

            <label class="label">Data de nascimento
                <input name="data_nasc" class="input" type="date" required/>
            </label>

            <label class="label">Validade
                    <input name="validade" class="input" type="date" required/>
            </label>

            <label class="label">Codigo de Seguranca
                <i class="fa-solid fa-lock"></i>
                <input name="cod_segu" class="input" type="text" required/>
            </label>                     
            
            <label class="label">Telefone
                <i class="fa-solid fa-phone"></i>
                <input name="telefone" class="input" type="text" required/>
            </label>
                                            
            <label class="label">Parcelas
                <select class="input" name="parcelas">
                    <option value="1" selected>1x de R$${parcelas.toFixed(2)} sem juros</option>
                    <option value="2" >2x de R$${(parcelas/2).toFixed(2)} sem juros</option>
                    <option value="3" >3x de R$${(parcelas/3).toFixed(2)} sem juros</option>
                </select>
            </label>            
    </form>`;

    document.getElementById('tipo-pagamento').innerHTML = conteudo;
}



function debito() {

    resultado = document.getElementById("select").value;

    var conteudo = ``;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;

    conteudo = 
    `<div class="titulo-pagamento">
        <h3 style="color:white;">Dados do titular do cartao</h3>
    </div>
    <form id="formulario" class="container">
            <label class="label">Numero do Cartao
                ${tipo_cartao[resultado-1]}
                <input name="num_cartao" class="input" type="text" required/>
            </label>

            <label class="label">CPF
                <input name="cpf" class="input" type="text" required/>
            </label>                     

            <label class="label">Nome Completo
                <input name="nome" class="input" type="text" required/>
            </label>    

            <label class="label">Data de nascimento
                <input name="data_nasc" class="input" type="date" required/>
            </label>

            <label class="label">Validade
                    <input name="validade" class="input" type="date" required/>
            </label>

            <label class="label">Codigo de Seguranca
                <i class="fa-solid fa-lock"></i>
                <input name="cod_segu"class="input" type="text" required/>
            </label>                     
            
            <label class="label">Telefone
                <i class="fa-solid fa-phone"></i>
                <input name="telefone" class="input" type="text" required/>
            </label>
    </form>`;

    document.getElementById('tipo-pagamento').innerHTML = conteudo;
}


/* A funcao PIX gerara um QR CODE para ser
efetivado o pagamento*/

function pix() {
    var conteudo = ``;

    document.getElementById("tipo-pagamento").innerHTML = conteudo;

    conteudo =
    `<div class="pix-titulo-container">
        <div class="pix-titulo">
            <h3 style="color:white;">Aqui esta o seu QR code</h3>
        </div>
    </div>
    <div class="pix-imagem-container">
        <img class="pix-imagem" src="img/QRcode.png" alt="QR CODE do pix">
    </div>`;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;
}

/* Funcao do botao finalizar, ele recebera os dados dos inputs e fara uma verificacao sobre eles
logo apos, caso passe pela verificacao corretamente, finalizara a compra, ao contrario fara um
alert sobre o erro na verificacao*/

async function finalizar() {

    var form = document.getElementById("formulario");
    var dados = new FormData (form);

    var promise = await fetch("php/finalizar.php", {
        method: "POST",
        body:dados
    });

    var continuar = await promise.json();

    if (continuar == 1){
        var conteudo =``;

        document.getElementById("tipo-pagamento").innerHTML = conteudo;
        document.getElementById("botoes").innerHTML = conteudo;
    
        var conteudo = 
        `<div class="finalizado-card">
            <div class="finalizado-titulo">Obrigado por comprar na Cleude Store</div>
    
            <div class="finalizado-baixo">
                <a class="finalizado-botao" href="index.html">Ver mais produtos</a>
            </div>
        </div>`
    
        document.getElementById("tipo-pagamento").innerHTML = conteudo;
    }
    else if(continuar == 2){
        alert("CPF invalido");
    }
    else if(continuar == 3){
        alert("Codigo de Seguranca invalido");
    }
    else if(continuar== 5){
        alert("Preenchar todos os campos para finalizar a compra");
        
    }
}

