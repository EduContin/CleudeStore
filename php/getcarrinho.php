<?php

    $con = mysqli_connect("localhost:3306", "root", "SERVER1234", "cleude");

    $resultado = mysqli_query($con, "SELECT p.id, p.nome, p.preco FROM produtos AS p INNER JOIN carrinho as c ON c.id_produto = p.id");

    $dados = array();

    while($registro = mysqli_fetch_assoc($resultado)){
        array_push($dados, $registro);
    }

    $json = json_encode($dados);
    echo $json;

?>