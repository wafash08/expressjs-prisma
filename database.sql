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

insert into products(id, name, price, stock, category)
    value ('P0006', 'A', 1000, 100, 'K2'),
    ('P0007', 'B', 2000, 200, 'K2'),
    ('P0008', 'C', 3000, 300, 'K2'),
    ('P0009', 'D', 4000, 400, 'K2'),
    ('P0010', 'E', 5000, 500, 'K2');

create table categories (
    id   int          not null auto_increment,
    name varchar(100) not null,
    primary key (id)
) engine innodb;

select * from categories;

create table wallet (
    id VARCHAR(100) NOT NULL,
    balance INT NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers(id),
    CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
) ENGINE = InnoDB;

show create table wallet;

SELECT * from wallet;

create table comments
(
    id          int          not null auto_increment,
    customer_id varchar(100) not null,
    title       varchar(100) not null,
    description text,
    primary key (id),
    constraint comments_customer_id_fk foreign key (customer_id) references customers (id)
) engine InnoDB;

select * from comments;

show create table comments;

insert into comments(customer_id, title, description)
values ('joko', 'Comment 1', 'Sample comment 1'),
       ('joko', 'Comment 2', 'Sample comment 2'),
       ('budi', 'Comment 1', 'Sample comment 1'),
       ('budi', 'Comment 3', 'Sample comment 3');

insert into comments (customer_id, title, description)
values ('xxx', 'xxx', 'xxx');