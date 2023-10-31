<?php
$con = mysqli_connect("localhost:3306", "root", "root", "cleude");
$id = $_POST["id_quantidade"];
$quant = $_POST["quantidade"];
$query = "UPDATE carrinho SET quantidade = " . $quant . " WHERE id_produto = " . $id;
mysqli_query($con, $query);
?>
