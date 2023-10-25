/*Ambas as funcoes credito_cartao e 
debito_cartao validarao se sera usado
o icone de mastercard ou visa*/


function credito_cartao() {  
    var conteudo = ``;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;

    var conteudo =`                        
    <div class="verificacao-card">
        <div class="verificacao-titulo">Qual Cartao voce usa?</div>
    
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
        <div class="verificacao-titulo">Qual Cartao voce usa?</div>
    
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
 que escolhera quais icones serao usados*/

function credito() {  

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
                <input name="cod_segu" class="input" type="text" required/>
            </label>                     
            
            <label class="label">Telefone
                <input name="telefone" class="input" type="text" required/>
            </label>
                                            
            <label class="label">Parcelas
                <select class="input" name="parcelas">
                    <option value="1" selected>1x de R$... sem juros</option>
                    <option value="2" >2x de R$... sem juros</option>
                    <option value="3" >3x de R$... sem juros</option>
                </select>
            </label>            
    </form>`;

    document.getElementById('tipo-pagamento').innerHTML = conteudo;
}

function debito() {

    resultado = document.getElementById("tipo-pagamento").value;

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
                <input name="cod_segu"class="input" type="text" required/>
            </label>                     
            
            <label class="label">Telefone
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
    `<div>
        <div class="pix-titulo">Aqui esta o seu QR CODE</div>
    </div>
    <div>
        <img class="pix-imagem" src="img/frame.png" alt="QR CODE do pix">
    </div>`;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;
}

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
        `<div class="finalizar-card">
            <div class="finalizar-titulo">Obrigado por comprar na Cleude Store</div>
    
            <div class="finalizar-baixo">
                <a class="finalizar-botao" href="index.html">Ver mais produtos</a>
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

