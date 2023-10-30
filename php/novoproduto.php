<?php 
if (isset($_FILES["arquivo"])) {
    $arquivo = $_FILES["arquivo"];

    $type =$arquivo["type"];
    $nome = $_POST["nome"];
    $preco = $_POST["preco"];

    # checagem da extensao da imagem e ve se os campos foram mandados nulos
    if($type == "image/png" && $nome != NULL && $preco != NULL){
        $con = mysqli_connect("localhost:3306", "root", "SERVER1234", "cleude");

        $query = "INSERT INTO produtos(nome,preco) VALUES ('" . $nome . "', '" . $preco . "')";
        mysqli_query($con,$query);

        #pega o id do produto inserido 
        $last_id = $con->insert_id;

        #define o nome do png para seu valor de id
        $novo_endereco = "../img/produtos/".$last_id . ".png";
        move_uploaded_file($arquivo["tmp_name"],$novo_endereco);

        #feedback para o usuario
        $msg = "Dados adicionados com sucesso!";
    }
    else{
        #Feedback para o usuario
        $msg = "ERRO: tipo de arquivo de imagem incorreto ou algum campo está vazio.";
    }
} 
else
{
    $msg = "ERRO: coloque um arquivo para imagem(.png)";
}

    echo json_encode($msg);
?>
