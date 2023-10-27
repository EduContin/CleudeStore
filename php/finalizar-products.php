<?php
    $conexao = mysqli_connect("localhost:3306","root", "LEGOland2015@","cleude");

    $resultado = mysqli_query($conexao, "select p.nome, p.preco, c.id_produto, c.quantidade from carrinho as c
	                                        join produtos as p on p.id = c.id_produto
	                                        order by c.id_produto;");

    $produtos = array();


    while($registro = mysqli_fetch_assoc($resultado)){
        array_push($produtos, $registro);
    }

    $json = json_encode($produtos);

    echo $json;

?>