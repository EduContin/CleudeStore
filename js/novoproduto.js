async function upload(){

    var arquivo = document.getElementById("file-upload").files;
    var nome = document.getElementById("nome").value;
    var preco = document.getElementById("preco").value;
    var dados = new FormData();
    dados.append('arquivo',arquivo[0]);
    dados.append('nome',nome);
    dados.append('preco',preco);

    resposta = await fetch('../php/novoproduto.php',{
        method:"POST",
        body:dados
    });

    var res = await resposta.json();
    alert(res);
}
