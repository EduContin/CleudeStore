<?php
    $num_cartao = $_POST["num_cartao"];
    $cpf = $_POST["cpf"];
    $nome = $_POST["nome"];
    $data_nasc = $_POST["data_nasc"];
    $validade = $_POST["validade"];
    $cod_segu = $_POST["cod_segu"];
    $telefone = $_POST["telefone"];

    $mensagem = "";

    if ($num_cartao !="" && $nome != "" && $cpf != "" && $cod_segu != "" && $telefone != ""){
        if (strlen($cpf) != 11) {
            $mensagem = 2;
        }
        else if(strlen($cod_segu) != 3) {
            $mensagem = 3;
        }
        else{
            $mensagem = 1;
        }
    }
    else{
        $mensagem = 5;

    }
    $json = json_encode($mensagem);

    echo $json;
?>