CREATE TABLE Products
(
    product_id int,
    product_size varchar(),
    product_color varchar(),
    product_price int,
    categories varchar(),
    ....
)

INSERT INTO Products(categories, product_color, product_price, product_size)
VALUES (shirts, Blue, 200, Large);

SELECT categories, product_price FROM Products;

UPDATE Products
SET product_color = Blue, product_price = 300
WHERE product_id = 1;

DELETE FROM Products WHERE product_id = 1;
