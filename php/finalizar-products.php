<?php
    $conexao = mysqli_connect("localhost:3306","root", "root","cleude");

    $resultado = mysqli_query($conexao, "SELECT p.nome, p.preco, c.id_produto, c.quantidade, SUM(p.preco * c.quantidade) AS preco_produto
                                        FROM carrinho AS c JOIN produtos AS p ON p.id = c.id_produto
                                        GROUP BY c.id_produto ORDER BY c.id_produto;");

    $produtos = array();


    while($registro = mysqli_fetch_assoc($resultado)){
        array_push($produtos, $registro);
    }

    $json = json_encode($produtos);

    echo $json;

?>