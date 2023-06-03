SELECT name FROM store.itens WHERE name LIKE 'GR%';
SELECT item_id FROM store.supplies WHERE item_id = 2 ORDER BY supplier_id ASC;
SELECT item_id, price, supplier_id FROM supplies WHERE supplier_id LIKE '%N%';
SELECT * FROM store.suppliers WHERE name LIKE '%LTDA%' ORDER BY name DESC;
SELECT COUNT(*) FROM store.suppliers WHERE id LIKE '%f%'; 
SELECT * FROM store.supplies WHERE price BETWEEN '16,00' AND '40,00' ORDER BY price ASC;
SELECT COUNT(*) FROM store.sales WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';