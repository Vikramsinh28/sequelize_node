create database online_grocery_app;

use online_grocery_app;

CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    parent_id INT,
    FOREIGN KEY (parent_id)
        REFERENCES Categories (id)
        ON DELETE CASCADE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
);
/*
npx sequelize-cli model:generate --name Categories --attributes title:string,parent_id:integer,is_active:boolean,deleted_at:date --underscored true
*/

CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(512),
    amount FLOAT,
    discount_type INT,
    discount_amount FLOAT,
    avatar_image VARCHAR(512),
    images BLOB,
    short_description VARCHAR(256),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
);
/*
npx sequelize-cli model:generate --name Products --attributes title:string,amount:float,discount_type:integer,discount_amount:float,avatar_image:string,images:blob,short_description:string,description:text,is_active:boolean,deleted_at:date --underscored true
*/

CREATE TABLE Product_Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    category_id INT,
    FOREIGN KEY (product_id)
        REFERENCES Products (id)
        ON DELETE CASCADE,
    FOREIGN KEY (category_id)
        REFERENCES Categories (id)
        ON DELETE CASCADE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
);
/*
npx sequelize-cli model:generate --name Product_Categories --attributes product_id:integer,category_id:integer,deleted_at:date --underscored true
*/


CREATE TABLE Customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    primary_mobile_number VARCHAR(16),
    primary_email VARCHAR(255),
    username VARCHAR(64),
    password TEXT,
    date_of_birth DATE,
    secondry_mobile_number VARCHAR(16),
    secondry_email VARCHAR(256),
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
);
alter table customers
add unique key(primary_email);
/*
npx sequelize-cli model:generate --name Customers --attributes first_name:string,last_name:string,primary_mobile_number:string,primary_email:string,username:string,password:text,date_of_birth:date,secondry_mobile_number:string,secondry_email:string,is_active:boolean,deleted_at:date --underscored true
*/

CREATE TABLE Addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id)
        REFERENCES Customers (id)
        ON DELETE CASCADE,
    address_line_1 VARCHAR(256),
    address_line_2 VARCHAR(256),
    area VARCHAR(64),
    city VARCHAR(64),
    state VARCHAR(64),
    country VARCHAR(64),
    postal_code VARCHAR(8),
    landmark VARCHAR(64),
    tag VARCHAR(8),
    is_default BOOLEAN,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
);
/*
npx sequelize-cli model:generate --name Addresses --attributes customer_id:integer,address_line_1:string,address_line_2:string,area:string,city:string,state:string,country:string,postal_code:string,landmark:string,tag:string,is_default:boolean,deleted_at:date --underscored true
*/


CREATE TABLE Payment_Status_master (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(64),
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
);
/*
npx sequelize-cli model:generate --name Payment_Status_Master --attributes title:string,is_active:boolean,deleted_at:date --underscored true
*/

CREATE TABLE Order_Status_master (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(64),
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
);
/*
npx sequelize-cli model:generate --name Order_Status_Master --attributes title:string,is_active:boolean,deleted_at:date --underscored true
*/


CREATE TABLE Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id)
        REFERENCES Customers (id)
        ON DELETE CASCADE,
    delivery_address_id INT,
    FOREIGN KEY (delivery_address_id)
        REFERENCES Addresses (id)
        ON DELETE CASCADE,
    shipping_address_id INT,
    FOREIGN KEY (shipping_address_id)
        REFERENCES Addresses (id)
        ON DELETE CASCADE,
    payment_status INT,
    FOREIGN KEY (payment_status)
        REFERENCES Payment_Status_Master (id)
        ON DELETE CASCADE,
    order_status INT,
    FOREIGN KEY (order_status)
        REFERENCES Order_Status_Master (id)
        ON DELETE CASCADE,
    order_number VARCHAR(64),
    order_date DATETIME,
    special_note VARCHAR(512),
    estimated_delivery_date DATETIME,
    sub_total FLOAT,
    tax_amout FLOAT,
    discount_amount FLOAT,
    total_amount FLOAT,
    paid_amount FLOAT,
    payment_type FLOAT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
/*
npx sequelize-cli model:generate --name Orders --attributes customer_id:integer,delivery_address_id:integer,shipping_address_id:integer,payment_status:integer,order_status:integer,order_number:string,order_date:date,special_note:string,estimated_delivery_date:date,sub_total:float,tax_amout:float,discount_amount:float,total_amount:float,paid_amount:float,payment_type:float --underscored true
*/

CREATE TABLE Order_Items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    FOREIGN KEY (order_id)
        REFERENCES Orders (id)
        ON DELETE CASCADE,
    product_id INT,
    FOREIGN KEY (product_id)
        REFERENCES Products (id)
        ON DELETE CASCADE,
    product_name VARCHAR(512),
    qty INT,
    product_amount FLOAT,
    discount_type FLOAT,
    discount_amount FLOAT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
);
/*
npx sequelize-cli model:generate --name Order_Items --attributes order_id:integer,product_id:integer,product_name:string,qty:integer,product_amount:float,discount_type:float,discount_amount:float,deleted_at:date --underscored true
*/

npx sequelize-cli db:migrate