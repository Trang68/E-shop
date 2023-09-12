-- pg_database WHERE datname = 'eshop_db'\gexec;

CREATE TABLE IF NOT EXISTS department (
    id INT NOT NULL,
    ename VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

insert into department(id,ename) values (1, 'MAN');
insert into department(id,ename) values (2, 'WOMAN');
insert into department(id,ename) values (3, 'ACCESSORY');

CREATE TABLE if not EXISTS category (
    id INT NOT NULL,
    ename VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);
insert into category(id,ename) values (1, 'Shirt');
insert into category(id,ename) values (2, 'Pants');
insert into category(id,ename) values (3, 'Short skirt');
insert into category(id,ename) values (4, 'Long skirt');
insert into category(id,ename) values (5, 'Shock');
insert into category(id,ename) values (6, 'Ties');
insert into category(id,ename) values (7, 'Belts');
insert into category(id,ename) values (8, 'Wallets');
insert into category(id,ename) values (9, 'Hats');

CREATE TABLE if not EXISTS product (
    id INT NOT NULL,
    category_id int NOT NULL,
    ename VARCHAR(50) NOT NULL,
    price int NOT NULL,
    product_description char(256) NOT NULL,
    department_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

insert into product (id,category_id,ename,price,product_description,department_id) 
    values (1,1,'Shirt for men UT design',500000,'Contemporary artist KAWS. Launching an exclusive UT t-shirt collection at UNIQLO on the occasion of the launch of the new art book edition from KAWS.',1);
insert into product (id,category_id,ename,price,product_description,department_id) 
    values (2,1,'Shirt for men UT design',300000,'Contemporary artist KAWS. Launching an exclusive UT t-shirt collection at UNIQLO on the occasion of the launch of the new art book edition from KAWS.',2);

CREATE TABLE if not EXISTS product_image (
    id INT NOT NULL,
    product_id INT NOT NULL,
    ename VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE if not EXISTS variation (
    id INT NOT NULL,
    ename VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE if not EXISTS product_variation (
    id INT NOT NULL,
    product_id int NOT NULL,
    variation_id int NOT NULL,
    ename VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (variation_id) REFERENCES variation(id)
);

CREATE TABLE if not EXISTS option_size (
    id INT NOT NULL,
    ename VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE if not EXISTS product_variation_option (
    id INT NOT NULL,
    product_variation_id int NOT NULL,
    option_size_id int NOT NULL,
    ename VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_variation_id) REFERENCES product_variation(id),
    FOREIGN KEY (option_size_id) REFERENCES option_size(id)
);





insert into variation(id,ename) values (1, 'white');
insert into variation(id,ename) values (2, 'red');
insert into variation(id,ename) values (3, 'green');
insert into variation(id,ename) values (4, 'yellow');
insert into variation(id,ename) values (5, 'gray');
insert into variation(id,ename) values (6, 'brown');
insert into variation(id,ename) values (7, 'blue');
insert into variation(id,ename) values (8, 'black');
insert into variation(id,ename) values (9, 'purple');
insert into variation(id,ename) values (10, 'pink');

insert into option_size(id,ename) values (1, 'S');
insert into option_size(id,ename) values (2, 'M');
insert into option_size(id,ename) values (3, 'L');
insert into option_size(id,ename) values (4, 'XL');

insert into product_image(id,product_id,ename) values (1,1, 'product_1_img_2');
insert into product_image(id,product_id,ename) values (2,1, 'product_1_img_3');
insert into product_image(id,product_id,ename) values (3,1, 'product_1_img_4');
insert into product_image(id,product_id,ename) values (4,1, 'product_1_img_5');
insert into product_image(id,product_id,ename) values (5,1, 'product_1_img_6');
insert into product_image(id,product_id,ename) values (6,1, 'product_1_img_7');
insert into product_image(id,product_id,ename) values (7,1, 'product_1_img_8');

insert into product_image(id,product_id,ename) values (8,2, 'product_2_img_2');
insert into product_image(id,product_id,ename) values (9,2, 'product_2_img_3');
insert into product_image(id,product_id,ename) values (10,2, 'product_2_img_4');
insert into product_image(id,product_id,ename) values (11,2, 'product_2_img_5');
insert into product_image(id,product_id,ename) values (12,2, 'product_2_img_6');
insert into product_image(id,product_id,ename) values (13,2, 'product_2_img_7');
insert into product_image(id,product_id,ename) values (14,2, 'product_2_img_8');

