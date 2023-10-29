<?php
$id  = $_POST
$con = mysqli_connect("localhost:3306", "root", "root", "cleude");
$resultado = mysqli_query($con, `DELETE FROM carrinho WHERE produto_id = ${id}`);

echo $resultado
?>
