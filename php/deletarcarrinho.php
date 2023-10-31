<?php

$con = mysqli_connect("localhost:3306", "root", "root", "cleude");
$id  = $_POST["id_deletar"];
$query = "DELETE FROM carrinho WHERE id_produto =" . $id;
mysqli_query($con,$query);
?>
