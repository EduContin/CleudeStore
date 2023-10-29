<?php

    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];

    print_r($id);

    $con = mysqli_connect("localhost:3306", "root", "root", "cleude");
    
    $stmt = $con->prepare("CALL AddToCart(?)");
    $stmt->bind_param("i", $id);
    $stmt->execute();
?>