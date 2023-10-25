//function credito() {
//   var conteudo = ``
//
//    var conteudo = ``
//}

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

/*As funcoes credito e debito sao chamadas por suas 
respectivas funcoes _cartao e possuem uma verificacao
do valor final do select nas funcoes anteriores,
 que escolhera quais icones serao usados*/

function credito() {  


    resultado = document.getElementById("select").value;

    var conteudo = ``;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;

    if (resultado == 1) {
        //Opcao VISA
        conteudo = 
        `<div class="titulo-pagamento">
            <h3 style="color:white;">Dados do titular do cartao</h3>
        </div>
        <div class="container">
    
            <label class="label">Numero do Cartao
                <i class="fa-brands fa-cc-visa"></i>
                <input class="input" type="text" required/>
            </label>
    
            <label class="label">CPF
                <input class="input" type="text" required/>
            </label>                     
    
            <label class="label">Nome Completo
                <input class="input" type="text" required/>
            </label>    
    
            <label class="label">Data de nascimento
                <input class="input" type="date" required/>
            </label>
    
            <label class="label">Validade
                    <input class="input" type="date"/>
            </label>
    
            <label class="label">Codigo de Seguranca
                <input class="input" type="text"/>
            </label>                     
              
            <label class="label">Telefone
                <input class="input" type="text"/>
            </label>
                                            
            <label class="label">Parcelas
                <select class="input" name="parcelas">
                    <option value="1" selected>1x de R$... sem juros</option>
                    <option value="2" >2x de R$... sem juros</option>
                    <option value="3" >3x de R$... sem juros</option>
                </select>
            </label>                
        </div>`;
    }
    else{
        //Opcao MASTERCARD
        conteudo = 
        `<div class="titulo-pagamento">
            <h3 style="color:white;">Dados do titular do cartao</h3>
        </div>
        <div class="container">
    
            <label class="label">Numero do Cartao
                <i class="fa-brands fa-cc-mastercard"></i>
                <input class="input" type="text"/>
            </label>
    
            <label class="label">CPF
                <input class="input" type="text"/>
            </label>                     
    
            <label class="label">Nome Completo
                <input class="input" type="text"/>
            </label>    
    
            <label class="label">Data de nascimento
                <input class="input" type="date"/>
            </label>
    
            <label class="label">Validade
                    <input class="input" type="date"/>
            </label>
    
            <label class="label">Codigo de Seguranca
                <input class="input" type="text"/>
            </label>                     
              
            <label class="label">Telefone
                <input class="input" type="text"/>
            </label>
                                            
            <label class="label">Parcelas
                <select class="input" name="parcelas">
                    <option value="1" selected>1x de R$... sem juros</option>
                    <option value="2" >2x de R$... sem juros</option>
                    <option value="3" >3x de R$... sem juros</option>
                </select>
            </label>                
        </div>`;
    }

    document.getElementById('tipo-pagamento').innerHTML = conteudo;

}

function debito() {

    resultado = document.getElementById("tipo-pagamento").value;

    var conteudo = ``;
    document.getElementById("tipo-pagamento").innerHTML = conteudo;

    if (resultado == 1) {
        //Opcao VISA
        conteudo = 
        `<div class="titulo-pagamento">
            <h3 style="color:white;">Dados do titular do cartao</h3>
        </div>
        <div class="container">
    
            <label class="label">Numero do Cartao
                <i class="fa-brands fa-cc-visa"></i>
                <input class="input" type="text"/>
            </label>
    
            <label class="label">CPF
                <input class="input" type="text"/>
            </label>                     
    
            <label class="label">Nome Completo
                <input class="input" type="text"/>
            </label>    
    
            <label class="label">Data de nascimento
                <input class="input" type="date"/>
            </label>
    
            <label class="label">Validade
                    <input class="input" type="date"/>
            </label>
    
            <label class="label">Codigo de Seguranca
                <input class="input" type="text"/>
            </label>                     
              
            <label class="label">Telefone
                <input class="input" type="text"/>
            </label>
              
        </div>`;
    }
    else{
        //Opcao MASTERCARD
        conteudo = 
        `<div class="titulo-pagamento">
            <h3 style="color:white;">Dados do titular do cartao</h3>
        </div>
        <div class="container">
    
            <label class="label">Numero do Cartao
                <i class="fa-brands fa-cc-mastercard"></i>
                <input class="input" type="text"/>
            </label>
    
            <label class="label">CPF
                <input class="input" type="text"/>
            </label>                     
    
            <label class="label">Nome Completo
                <input class="input" type="text"/>
            </label>    
    
            <label class="label">Data de nascimento
                <input class="input" type="date"/>
            </label>
    
            <label class="label">Validade
                    <input class="input" type="date"/>
            </label>
    
            <label class="label">Codigo de Seguranca
                <input class="input" type="text"/>
            </label>                     
              
            <label class="label">Telefone
                <input class="input" type="text"/>
            </label>
               
        </div>`;
    }

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