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
