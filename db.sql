DROP SCHEMA IF EXISTS cleude;
CREATE SCHEMA IF NOT EXISTS cleude;

USE cleude;

DROP TABLE IF EXISTS cleude.carrinho;
DROP TABLE IF EXISTS cleude.produtos;


CREATE TABLE IF NOT EXISTS cleude.produtos(
	id int not null auto_increment,
    nome varchar(50) not null,
    preco float not null,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS cleude.carrinho(
    id_produto int not null primary key,
    quantidade int,
    FOREIGN KEY(id_produto) REFERENCES cleude.produtos (id)
    
);

INSERT INTO produtos (nome, preco) VALUES ('Prato Ambar', 14.90), ('Kit de Croche', 44.90), ('Minancora', 14.90 ), ('Toca de banho', 9.90), ('Pedra Hume', 12.90), ('Filtro de Barro', 59.90), ('Perfume Channel N°5', 1159.90), ('Pantufa de Flor', 24.90), ('Almofada de Erva', 29.90), ('Sino de Vento', 49.90);

DELIMITER $$
CREATE PROCEDURE AddToCart(IN id INT)
BEGIN
    DECLARE quantity INT;

    SELECT COUNT(*) INTO quantity 
    FROM carrinho 
    WHERE id_produto = id;

    IF quantity > 0 THEN
        UPDATE carrinho 
        SET quantidade = quantidade + 1 
        WHERE id_produto = id;
    ELSE
        INSERT INTO carrinho (id_produto, quantidade) 
        VALUES (id, 1);
    END IF;
END $$
DELIMITER ;