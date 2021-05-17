Create database Capstone_Project;
use Capstone_Project;
create table customer_details(customer_id int primary key auto_increment NOT NULL, first_name varchar(50), last_name varchar(50),
email varchar(50));
create table address_details(address_id int primary key auto_increment NOT NULL, city varchar(10), country varchar(20),
state varchar(20), street varchar(20), zipcode varchar(30));
create table order_details(order_id int primary key auto_increment NOT NULL, total_quantity int, total_price double, address_id
 int , customer_id int, foreign key(address_id) references address_details(address_id),
 foreign key(customer_id) references customer_details(customer_id));
create table login_details(user_id int primary key auto_increment NOT NULL,first_name varchar(30),
 last_name varchar(30),email varchar(30),user_password varchar(30));
 
select * from address_details;
select * from Customer_details;
select * from order_details;
select * from login_details;

 delete from order_details where order_id>0;
 delete from customer_details where customer_id>0;
 delete from address_details where address_id>0;
 delete from login_details where user_id>0;

drop table order_details;
drop table address_details;
drop table customer_details;
drop table login_details;