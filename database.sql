use nodejs_prisma;

create table sample (
    id   varchar(100) not null,
    name varchar(100) not null,
    primary key (id)
) engine innodb;

CREATE TABLE customers (
    id VARCHAR(100) NOT NULL,   
    name VARCHAR(100) NOT NULL,   
    email VARCHAR(100) NOT NULL,   
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    constraint customers_email_unique UNIQUE (email),
    constraint customers_phone_unique UNIQUE (phone)
) engine innodb;

show create table customers;

select * from customers;

delete from customers where id in ("joko", "budi");

SELECT * FROM customers ORDER BY id ASC LIMIT 1 OFFSET 1;

SELECT * FROM customers WHERE name = "budi"

CREATE TABLE products (
    id   varchar(100) not null,
    name     varchar(100) not null,
    price    int          not null,
    stock    int          not null,
    category varchar(100) not null,
    primary key (id)
) engine innodb;

SELECT * FROM products;

insert into products(id, name, price, stock, category)
    value ('P0001', 'A', 1000, 100, 'K1'),
    ('P0002', 'B', 2000, 200, 'K1'),
    ('P0003', 'C', 3000, 300, 'K1'),
    ('P0004', 'D', 4000, 400, 'K1'),
    ('P0005', 'E', 5000, 500, 'K1');