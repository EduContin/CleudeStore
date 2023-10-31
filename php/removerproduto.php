<?php

    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];

    print_r($id);

    $con = mysqli_connect("localhost:3306", "root", "root", "cleude");
    $query = "DELETE FROM carrinho WHERE id_produto = " . $id;
    $resultado = mysqli_query($con,$query);
    $query = "DELETE FROM produtos WHERE id = ". $id;
    $resultado = mysqli_query($con,$query);
    
?>
